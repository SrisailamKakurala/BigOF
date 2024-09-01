import logo from '../assets/images/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
// import axios from 'axios'


const LoginPage = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [mobile, setMobile] = useState('');
    const [error, setError] = useState(false);
    const userData = {
        username: username,
        password: password,
        mobile: mobile
    }

    const handleLogin = async () => {
        if (username !== '' && password !== '' && mobile !== '') {
          console.log(userData);
            // try {
            //     const userData = { username, password };
            //     const response = await axios.post('http://localhost:3000/login', userData);
            //     if (response.data) {
            //         // Store user data in local storage
            //         localStorage.setItem('userData', JSON.stringify(response.data.user));
            //         navigate('/home');
            //     }
            // } catch (err) {
            //     setError(true);
            // }
        }
    }

    const usernameHandler = (e) => {
        setUsername(e.target.value);
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value);
    }

    const mobileHandler = (e) => {
        setMobile(e.target.value);
    }

    return (
        <div className="overflow-hidden bg-green-500 w-[100vw] h-[100vh] flex justify-center items-center">
            <div className="form-container bg-white w-[90vw] md:w-[45vw] lg:w-[30vw] rounded-xl shadow-xl flex flex-col gap-5 p-8 ">
                <div className="logo flex w-full justify-center ">
                    <img className='h-16' src={logo} alt="" />
                </div>
                <input onChange={usernameHandler} value={username} className='p-3 font-medium w-[95%] mx-auto ring-2 ring-green-400 rounded-lg' type="text" placeholder='Username' />
                <input onChange={passwordHandler} value={password} className='p-3 font-medium w-[95%] mx-auto ring-2 ring-green-400 rounded-lg' type="password" placeholder='Password' />
                <input onChange={mobileHandler} value={mobile} className='p-3 font-medium w-[95%] mx-auto ring-2 ring-green-400 rounded-lg' type="text" placeholder='registered number' />
                {error && <p className='mx-auto text-red-600 text-shadow font-semibold'>Invalid Credentials</p>}
                <input onClick={handleLogin} className='p-2 font-medium w-[35%] bg-green-500 hover:bg-green-600 duration-150 text-lg text-white cursor-pointer mx-auto ring-2 ring-white rounded-lg' type="button" value='Login' />

                <div className="flex justify-center text-sm">
                    don't have an account? <Link className='text-blue-700 ml-2' to={'/register'}>SignUp</Link>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;