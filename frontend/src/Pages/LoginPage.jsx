import logo from '../assets/images/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const LoginPage = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [mobile, setMobile] = useState('');
    const [error, setError] = useState(false);
    const [mobileError, setMobileError] = useState('');

    const handleLogin = async () => {
        if (username !== '' && password !== '' && mobile !== '') {
            console.log({ username, password, mobile });
            // try {
            //     const response = await axios.post('http://localhost:3000/login', userData);
            //     if (response.data) {
            //         localStorage.setItem('userData', JSON.stringify(response.data.user));
            //         navigate('/home');
            //     }
            // } catch (err) {
            //     setError(true);
            // }
        }
    };

    const handleForgotPassword = () => {
        if (mobile !== '') {
            // Redirect to verify OTP page with state
            navigate('/verifyotp', { state: { otpSent: true } });
        } else {
            setMobileError('Please enter your registered mobile number.');
        }
    };

    return (
        <div className="overflow-hidden bg-green-500 w-[100vw] h-[100vh] flex justify-center items-center">
            <div className="form-container bg-white w-[90vw] md:w-[45vw] lg:w-[30vw] rounded-xl shadow-xl flex flex-col gap-5 p-8">
                <div className="logo flex w-full justify-center">
                    <img className='h-16' src={logo} alt="" />
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
                        setMobileError(''); // Clear the error when user starts typing
                    }}
                    value={mobile}
                    className='p-3 font-medium w-[95%] mx-auto ring-2 ring-green-400 rounded-lg'
                    type="text"
                    placeholder='Registered number'
                />
                {error && <p className='mx-auto text-red-600 text-shadow font-semibold'>Invalid Credentials</p>}
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
