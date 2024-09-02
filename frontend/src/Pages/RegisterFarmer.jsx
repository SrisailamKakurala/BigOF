import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css'

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
        address: '',
        identification: '',
        profileImage: null, 
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleImageChange = (e) => {
        setFormData({
            ...formData,
            profileImage: e.target.files[0], 
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formDataToSend = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            formDataToSend.append(key, value);
        });

        try {
            const response = await fetch('/api/send-otp', {
                method: 'POST',
                body: formDataToSend,
            });

            if (response.ok) {
                const data = await response.json();
                console.log('OTP sent successfully:', data);

                // Navigate to OTP verification page with formData
                navigate('/verifyotp', { state: { formData } });
            } else {
                navigate('/verifyotp', { state: { formData } });
                console.error('Failed to send OTP');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-green-500 md:bg-[url('https://www.pngall.com/wp-content/uploads/6/Grass-Ground-PNG-Free-Image.png')] bg-cover ">
            <form className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg overflow-y-scroll scrollbar-hide m-8" onSubmit={handleSubmit}>
                <div className="mb-4 text-center">
                    <input
                        type="file"
                        name="profileImage"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                        id="profileImage"
                    />
                    <label htmlFor="profileImage" className="cursor-pointer">
                        <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                            {formData.profileImage ? (
                                <img
                                    src={URL.createObjectURL(formData.profileImage)}
                                    alt="Profile Preview"
                                    className="object-cover w-full h-full"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center p-5 text-gray-400">
                                    <span>Select Profile Image</span>
                                </div>
                            )}
                        </div>
                    </label>
                </div>

                <div className="mb-4">
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        className="w-full p-4 text-sm border border-gray-300 rounded-lg focus:outline-none"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="tel"
                        name="phoneNumber"
                        placeholder="Phone Number"
                        className="w-full p-4 text-sm border border-gray-300 rounded-lg focus:outline-none"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="w-full p-4 text-sm border border-gray-300 rounded-lg focus:outline-none"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        className="w-full p-4 text-sm border border-gray-300 rounded-lg focus:outline-none"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        className="w-full p-4 text-sm border border-gray-300 rounded-lg focus:outline-none"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-6">
                    <input
                        type="text"
                        name="identification"
                        placeholder="Aadhaar, PAN card, etc."
                        className="w-full p-4 text-sm border border-gray-300 rounded-lg focus:outline-none"
                        value={formData.identification}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-4 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 focus:outline-none"
                >
                    Register
                </button>
            </form>
        </div>
    );
};

export default RegisterForm;
