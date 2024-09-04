import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const OTPVerification = () => {
    const [otp, setOtp] = useState(['', '', '', '']);
    const [otpSent, setOtpSent] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.state && location.state.otpSent) {
            setOtpSent(true);
            setPopupMessage('OTP sent successfully!');
            setTimeout(() => {
                setPopupMessage('');
            }, 3000); // Hide the popup message after 3 seconds
        }
    }, [location.state]);

    const handleChange = (e, index) => {
        const value = e.target.value;
        if (/^[0-9]$/.test(value) || value === '') {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            // Move focus to the next input field
            if (value && index < otp.length - 1) {
                document.getElementById(`otp-input-${index + 1}`).focus();
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const otpString = otp.join('');

        try {
            const response = await fetch('http://localhost:8000/api/v1/farmers/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ phoneNumber: location.state.formData.phoneNumber, otp: otpString }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('OTP verified successfully:', data);

                // After verification, send form data to the backend
                await fetch('/api/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(location.state.formData),
                });

                // Navigate to the success page
                navigate('/success');
            } else {
                console.error('Failed to verify OTP');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <form className="w-full max-w-xs bg-white p-8 rounded-lg shadow-lg" onSubmit={handleSubmit}>
                <h2 className="text-center text-xl font-bold mb-6">OTP Verification</h2>
                <div className="flex space-x-2 justify-center mb-6">
                    {otp.map((digit, index) => (
                        <input
                            key={index}
                            id={`otp-input-${index}`}
                            type="text"
                            maxLength="1"
                            className="w-12 h-12 text-center text-2xl border-2 border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            value={digit}
                            onChange={(e) => handleChange(e, index)}
                        />
                    ))}
                </div>
                <button
                    type="submit"
                    className="w-full py-4 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 focus:outline-none"
                >
                    Verify
                </button>
            </form>
            {popupMessage && (
                <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg">
                    {popupMessage}
                </div>
            )}
        </div>
    );
};

export default OTPVerification;
