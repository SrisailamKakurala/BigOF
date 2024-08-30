import React from 'react'
import Button from '../utils/Button'
import Logo from '../assets/images/logo.png'

const Navbar = () => {
    return (
        <header className='h-[70px] w-full bg-white shadow-xl rounded-xl px-4 md:px-10 lg:px-20 flex items-center justify-between'>
            <div className="logo">
                <img src={Logo} className='h-[65px] w-[65px]' alt="BigOF Logo" />
            </div>
            <div className="buttons flex gap-3">
                <button className='px-6 shadow-md py-2 bg-green-600 hover:bg-green-500 duration-200 rounded-md text-white text-lg font-semibold'>Login</button>
            </div>
        </header>
    )
}

export default Navbar