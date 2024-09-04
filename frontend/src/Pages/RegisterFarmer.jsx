import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
        address: '',
        identification: '',
        user: 'farmer'
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'phoneNumber' && !/^\d*$/.test(value)) {
            return; // Prevents non-numeric characters from being entered
        }

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateForm = () => {
        let formErrors = {};

        if (!formData.fullName) formErrors.fullName = "Full name is required.";
        if (!formData.phoneNumber) formErrors.phoneNumber = "Phone number is required.";
        if (!/^\d{10}$/.test(formData.phoneNumber)) formErrors.phoneNumber = "Phone number must be 10 digits.";
        if (!formData.password) formErrors.password = "Password is required.";
        if (formData.password !== formData.confirmPassword) {
            formErrors.confirmPassword = "Passwords do not match.";
        }
        if (!formData.address) formErrors.address = "Address is required.";
        if (!formData.identification) formErrors.identification = "Identification is required.";

        return formErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        // Store text fields in localStorage
        localStorage.setItem('formData', JSON.stringify(formData));

        setIsSubmitting(true);

        try {
            // Send axios GET request
            await axios.get(`http://localhost:8000/api/v1/farmers/send-otp/${formData.phoneNumber}`);

            // Navigate to OTP verification page
            navigate('/verifyotp');
        } catch (error) {
            console.error("There was an error sending the OTP request:", error);
            // Optionally handle error state here
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-green-500 md:bg-[url('https://www.pngall.com/wp-content/uploads/6/Grass-Ground-PNG-Free-Image.png')] bg-cover">
            <form className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg overflow-y-scroll scrollbar-hide m-8" onSubmit={handleSubmit}>
                <div className="mb-4 text-center">
                    <h1 className="text-2xl font-bold mb-4">Register as Farmer</h1>
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
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
                <div className="mb-6">
                    <input
                        type="text"
                        name="identification"
                        placeholder="Aadhaar, PAN card, etc."
                        className={`w-full p-4 text-sm border rounded-lg focus:outline-none ${errors.identification ? 'border-red-500 ring-red-400 ring-2' : 'border-gray-300 ring-green-400 ring-2'}`}
                        value={formData.identification}
                        onChange={handleChange}
                        required
                    />
                    {errors.identification && <p className="text-red-500 text-sm">{errors.identification}</p>}
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

export default RegisterForm;
