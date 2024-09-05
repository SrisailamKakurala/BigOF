import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegisterBuyer = ({ setIsAuthenticated }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        mobileNumber: '',
        password: '',
        confirmPassword: '',
        email: '',
        address: '',
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Ensure mobileNumber contains only numbers
        if (name === 'mobileNumber') {
            if (!/^\d*$/.test(value)) return; // Only update if value is numeric
        }

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateForm = () => {
        let formErrors = {};

        if (!formData.fullName) formErrors.fullName = "Full name is required.";
        if (!formData.mobileNumber) formErrors.mobileNumber = "Phone number is required.";
        if (!/^\d{10}$/.test(formData.mobileNumber)) formErrors.mobileNumber = "Phone number must be 10 digits.";
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
    
        try {
            const response = await axios.post("http://localhost:8000/api/v1/buyers/register", formData);
            if (response.status === 200) {
                localStorage.setItem('buyerDets', JSON.stringify(response.data));
                // have to set is authenticated to true
                navigate('/buyerDashboard');
            } else {
                setErrors({ server: 'Something went wrong. Please try again.' });
            }
        } catch (err) {
            setErrors({ server: err.response?.data?.message || err.message });
        } finally {
            setIsSubmitting(false);
        }
    };
    

    return (
        <div className="min-h-screen flex items-center justify-center bg-green-500 py-5 px-5 md:bg-[url('https://www.pngall.com/wp-content/uploads/6/Grass-Ground-PNG-Free-Image.png')] bg-cover">
            <form className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg" onSubmit={handleSubmit}>
                {errors.server && <p className="text-red-500 text-sm mb-4">{errors.server}</p>}
                
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
                        name="mobileNumber"
                        placeholder="Phone Number"
                        className={`w-full p-4 text-sm border rounded-lg focus:outline-none ${errors.mobileNumber ? 'border-red-500 ring-red-400 ring-2' : 'border-gray-300 ring-green-400 ring-2'}`}
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        required
                    />
                    {errors.mobileNumber && <p className="text-red-500 text-sm">{errors.mobileNumber}</p>}
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
