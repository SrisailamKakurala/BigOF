import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterBuyer = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
        email: '',
        address: '',
        profileImage: null,
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Ensure phoneNumber contains only numbers
        if (name === 'phoneNumber') {
            if (!/^\d*$/.test(value)) return; // Only update if value is numeric
        }

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleImageChange = (e) => {
        setFormData({
            ...formData,
            profileImage: e.target.files[0],
        });
    };

    const validateForm = () => {
        let formErrors = {};

        if (!formData.fullName) formErrors.fullName = "Full name is required.";
        if (!formData.phoneNumber) formErrors.phoneNumber = "Phone number is required.";
        if (!formData.email) formErrors.email = "Email is required.";
        if (!formData.password) formErrors.password = "Password is required.";
        if (formData.password !== formData.confirmPassword) {
            formErrors.confirmPassword = "Passwords do not match.";
        }
        if (!formData.address) formErrors.address = "Address is required.";

        return formErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        setIsSubmitting(true);

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
                navigate('/verify', { state: { formData } });
            } else {
                console.error('Failed to send OTP');
                navigate('/verifyotp', { state: { formData } });
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-green-500 py-5 px-5 md:bg-[url('https://www.pngall.com/wp-content/uploads/6/Grass-Ground-PNG-Free-Image.png')] bg-cover">
            <form className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg" onSubmit={handleSubmit}>
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
                                <div className="w-full h-full flex items-center justify-center text-gray-400 p-4">
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
                        placeholder="Full Name/Company Name"
                        className={`w-full p-4 text-sm border rounded-lg focus:outline-none ${errors.fullName ? 'border-red-500 ring-red-400 ring-2' : 'border-gray-300 ring-green-400 ring-2'}`}
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />
                    {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
                </div>
                <div className="mb-4">
                    <input
                        type="tel"
                        name="phoneNumber"
                        placeholder="Phone Number"
                        className={`w-full p-4 text-sm border rounded-lg focus:outline-none ${errors.phoneNumber ? 'border-red-500 ring-red-400 ring-2' : 'border-gray-300 ring-green-400 ring-2'}`}
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                    />
                    {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
                </div>
                <div className="mb-4">
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className={`w-full p-4 text-sm border rounded-lg focus:outline-none ${errors.password ? 'border-red-500 ring-red-400 ring-2' : 'border-gray-300 ring-green-400 ring-2'}`}
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                </div>
                <div className="mb-4">
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        className={`w-full p-4 text-sm border rounded-lg focus:outline-none ${errors.confirmPassword ? 'border-red-500 ring-red-400 ring-2' : 'border-gray-300 ring-green-400 ring-2'}`}
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                    {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
                </div>
                <div className="mb-4">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email id"
                        className={`w-full p-4 text-sm border rounded-lg focus:outline-none ${errors.email ? 'border-red-500 ring-red-400 ring-2' : 'border-gray-300 ring-green-400 ring-2'}`}
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        className={`w-full p-4 text-sm border rounded-lg focus:outline-none ${errors.address ? 'border-red-500 ring-red-400 ring-2' : 'border-gray-300 ring-green-400 ring-2'}`}
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                    {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
                </div>
                <button
                    type="submit"
                    className={`w-full py-4 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 focus:outline-none ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Registering...' : 'Register'}
                </button>
            </form>
        </div>
    );
};

export default RegisterBuyer;
