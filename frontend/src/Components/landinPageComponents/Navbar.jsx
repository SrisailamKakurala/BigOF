import React from 'react'
import Logo from '/src/assets/images/logo.png'
import { Link, Navigate } from 'react-router-dom'

const Navbar = () => {
    return (
        <header className='h-[70px] fixed bg-transparent w-full bg-white shadow-xl rounded-xl px-4 md:px-10 lg:px-20 flex items-center justify-between'>
            <div className="logo">
                <Link>
                    <img src={Logo} className='h-[65px] w-[65px]' alt="BigOF Logo" />
                </Link>
            </div>

            <div className="flex gap-5 justify-center items-center">

                <div>
                    <ul className="lg:flex text-lg lg:gap-5 xl:gap-5 md:gap-3 hidden">
                        <li className='hover:text-green-500 font-semibold duration-200'><a href='#features'>Features & Benefits</a></li>
                        <li className='hover:text-green-500 font-semibold duration-200'><a href='#testimonials'>Testimonials</a></li>
                        <li className='hover:text-green-500 font-semibold duration-200'><a href='#demo'>Demo</a></li>
                        <li className='hover:text-green-500 font-semibold duration-200'><a href='#contactus'>Contact Us</a></li>
                    </ul>
                </div>

                {/* Login button */}
                <div className="buttons flex gap-3">
                    <Link to={'/login'} className='px-6 shadow-md py-2 bg-green-600 hover:bg-green-500 duration-200 rounded-md text-white text-lg font-semibold'>Login</Link>
                </div>

            </div>

        </header>
    )
}

export default Navbar