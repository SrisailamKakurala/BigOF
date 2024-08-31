import React from 'react';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-xs">
                <div className="space-y-4 flex flex-col gap-10 text-xl">
                    <Link to="/register_farmer">
                        <button className="w-full py-4 text-white font-bold bg-green-500 rounded-lg shadow-lg hover:bg-green-600 focus:outline-none">
                            Register as Farmer <i class="fa-solid fa-seedling fa-2xl ml-2"></i>
                        </button>
                    </Link>
                    <Link to="/register_buyer">
                        <button className="w-full py-4 text-white font-bold bg-green-500 rounded-lg shadow-lg hover:bg-green-600 focus:outline-none">
                            Register as Buyer <i class="fa-solid fa-user-tie fa-2xl ml-3"></i>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;
