import logo from '../assets/images/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const LoginPage = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [mobile, setMobile] = useState('');
    const [error, setError] = useState('');
    const [mobileError, setMobileError] = useState('');

    const validateMobile = () => {
        const mobileRegex = /^[6-9]\d{9}$/;
        if (!mobile) {
            console.log('Mobile number is required.');
            return 'Mobile number is required.';
        } else if (!mobileRegex.test(mobile)) {
            console.log('Invalid mobile number format.');
            return 'Invalid mobile number.';
        }
        return '';
    };

    const handleLogin = async () => {
        console.log('Attempting to log in...');
        const mobileValidationError = validateMobile();

        if (mobileValidationError) {
            setMobileError(mobileValidationError);
            console.log('Validation Error:', mobileValidationError);
            return;
        }

        if (username === '' || password === '' || mobile === '') {
            setError('All fields are required.');
            console.log('Error: All fields are required.');
            return;
        }

        console.log({ username, password, mobile });
        // try {
        //     const response = await axios.post('http://localhost:3000/login', { username, password, mobile });
        //     if (response.data) {
        //         localStorage.setItem('userData', JSON.stringify(response.data.user));
        //         navigate('/home');
        //     } else {
        //         setError('Invalid credentials. Please try again.');
        //         console.log('Error: Invalid credentials.');
        //     }
        // } catch (err) {
        //     setError('An error occurred during login. Please try again.');
        //     console.log('Error:', err);
        // }
    };

    const handleForgotPassword = () => {
        console.log('Attempting to reset password...');
        const mobileValidationError = validateMobile();

        if (mobileValidationError) {
            setMobileError(mobileValidationError);
            console.log('Validation Error:', mobileValidationError);
            return;
        }

        console.log('Navigating to OTP verification...');
        navigate('/verifyotp', { state: { otpSent: true } });
    };

    return (
        <div className="overflow-hidden bg-green-500 w-[100vw] h-[100vh] flex justify-center items-center md:bg-[url('https://www.pngall.com/wp-content/uploads/6/Grass-Ground-PNG-Free-Image.png')] bg-cover">
            <div className="form-container bg-white w-[90vw] md:w-[45vw] lg:w-[30vw] rounded-xl shadow-xl flex flex-col gap-5 p-8">
                <div className="logo flex w-full justify-center">
                    <img className='h-16' src={logo} alt="Logo" />
                </div>
                <input
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    className='p-3 font-medium w-[95%] mx-auto ring-2 ring-green-400 rounded-lg'
                    type="text"
                    placeholder='Username'
                />
                <input
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    className='p-3 font-medium w-[95%] mx-auto ring-2 ring-green-400 rounded-lg'
                    type="password"
                    placeholder='Password'
                />
                <input
                    onChange={(e) => {
                        setMobile(e.target.value);
                        setMobileError(''); // Clear the error when the user starts typing
                    }}
                    value={mobile}
                    className='p-3 font-medium w-[95%] mx-auto ring-2 ring-green-400 rounded-lg'
                    type="text"
                    placeholder='Registered Mobile Number'
                />
                {error && <p className='mx-auto text-red-600 text-shadow font-semibold'>{error}</p>}
                {mobileError && <p className='mx-auto text-red-600 text-shadow font-semibold'>{mobileError}</p>}
                <input
                    onClick={handleLogin}
                    className='p-2 font-medium w-[35%] bg-green-500 hover:bg-green-600 duration-150 text-lg text-white cursor-pointer mx-auto ring-2 ring-white rounded-lg'
                    type="button"
                    value='Login'
                />
                <div className="flex justify-center text-sm">
                    <button onClick={handleForgotPassword} className='text-green-600 text-md ml-2'>Forgot password?</button>
                </div>
                <div className="flex justify-center text-sm">
                    Don't have an account? <Link className='text-blue-700 ml-2' to={'/register'}>SignUp</Link>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
