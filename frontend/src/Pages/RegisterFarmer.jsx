import React, { useState, useContext } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import '../index.css';
import { AuthContext } from '../Contexts/AuthContext';

const RegisterForm = () => {
    const { setIsAuthenticated } = useContext(AuthContext);


    const [formData, setFormData] = useState({
        fullName: '',
        mobileNumber: '',
        password: '',
        confirmPassword: '',
        address: '',
        aadharNumber: '',
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'mobileNumber' && !/^\d*$/.test(value)) {
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
        if (!formData.mobileNumber) formErrors.mobileNumber = "Phone number is required.";
        if (!/^\d{10}$/.test(formData.mobileNumber)) formErrors.mobileNumber = "Phone number must be 10 digits.";
        if (!formData.password) formErrors.password = "Password is required.";
        if (formData.password !== formData.confirmPassword) {
            formErrors.confirmPassword = "Passwords do not match.";
        }
        if (!formData.address) formErrors.address = "Address is required.";
        if (!formData.aadharNumber) formErrors.aadharNumber = "aadharNumber is required.";

        return formErrors;
    };

    const handleSubmit = async (e)=>{
        e.preventDefault()

        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        try {
            const response = await axios.post("http://localhost:8000/api/v1/farmers/register", formData);
            // console.log(response.data)
            if (response.status === 200) {
                // localStorage.setItem('isAuthenticated', JSON.stringify(true));
                localStorage.setItem('userData', JSON.stringify(response.data.data))
                setIsAuthenticated(true)
                navigate('/')
            } else {
                alert('Something went wrong. Please try again.');
            }
        } catch (err) {
            console.log(err.message);
        }
    }

    

    return (
        <div className="min-h-screen flex items-center justify-center bg-green-500 md:bg-[url('https://www.pngall.com/wp-content/uploads/6/Grass-Ground-PNG-Free-Image.png')] bg-cover">
            <form className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg overflow-y-scroll scrollbar-hide m-8" onSubmit={handleSubmit}>
                
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
                        name="aadharNumber"
                        placeholder="Aadhaar, PAN card, etc."
                        className={`w-full p-4 text-sm border rounded-lg focus:outline-none ${errors.aadharNumber ? 'border-red-500 ring-red-400 ring-2' : 'border-gray-300 ring-green-400 ring-2'}`}
                        value={formData.aadharNumber}
                        onChange={handleChange}
                        required
                    />
                    {errors.aadharNumber && <p className="text-red-500 text-sm">{errors.aadharNumber}</p>}
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
