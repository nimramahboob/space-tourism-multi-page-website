import React, { useState } from 'react'
import logoIcon from '../images/logo.svg'
import menuIcon from '../images/menu-icon.svg'
import closeIcon from '../images/close.svg'
import { Link, Outlet } from 'react-router-dom'

function Layout({ children, image }) {
    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <div>
            <nav className='flex justify-between items-center px-7 py-7 md:px-0 md:py-0 lg:my-10'>
                <img
                    src={logoIcon}
                    alt='logo'
                    className='md:ml-8 lg:ml-14 lg:mr-14'
                />
                {/* links for mobile */}
                <button onClick={() => setToggleMenu(true)} className='md:hidden'>
                    <img
                        src={menuIcon}
                        alt='menu icon'
                        className='cursor-pointer'
                    />
                </button>

                {/* links for tablet */}

                <div className='hidden md:block bg-opacity-white lg:hidden'>
                    <div className='text-white uppercase text-sm tracking-[2.36px] font-barlow-condensed  md:py-9 md:px-4'>
                        <Link to='/'
                            className='mx-7 py-9 hover:border-b-2'>
                            Home
                        </Link>

                        <Link to='/destination'
                            className='mx-7 py-9 hover:border-b-2'>
                            Destination
                        </Link>

                        <Link to='/crew'
                            className='mx-7 py-9 hover:border-b-2'>
                            Crew
                        </Link>

                        <Link to='/technology'
                            className='mx-7 py-9 hover:border-b-2'>
                            Technology
                        </Link>
                    </div>
                </div>


                {/* links for desktop */}
                <div className='hidden lg:block flex-1 h-[0.5px] bg-white opacity-30 -mr-10 z-10'></div>
                <div className='hidden lg:block backdrop-blur-[150px]'>
                    <div className='text-white uppercase text-base tracking-[2.7px] font-barlow-condensed  lg:py-7 lg:px-24'>
                        <Link to='/'
                            className='mx-7 py-7 hover:border-b-2'>
                            <span className='font-bold'>00 </span>
                            Home
                        </Link>

                        <Link to='/destination'
                            className='mx-7 py-7 hover:border-b-2'>
                            <span className='font-bold'>01 </span>
                            Destination
                        </Link>

                        <Link to='/crew'
                            className='mx-7 py-7 hover:border-b-2'>
                            <span className='font-bold'>02 </span>
                            Crew
                        </Link>

                        <Link to='/technology'
                            className='mx-7 py-7 hover:border-b-2'>
                            <span className='font-bold'>03 </span>
                            Technology
                        </Link>
                    </div>
                </div>

            </nav>

            {/* Mobile links */}
            {toggleMenu &&
                <div className='absolute h-full top-0 right-0 w-[254px] backdrop-blur-lg'>
                    <div className='flex items-end justify-end py-7 px-7 '>
                        <button onClick={() => setToggleMenu(false)}>
                            <img
                                src={closeIcon}
                                alt='close icon'
                                className='w-4 cursor-pointer'
                            />
                        </button>
                    </div>

                    <ul className='text-white uppercase text-base tracking-[2.7px] font-barlow-condensed mx-8 mt-14'>
                        <li className='mb-10'>
                            <Link to='/' onClick={() => setToggleMenu(false)} className='bg-opacity-white'><span className='font-bold'>00</span> Home</Link>
                        </li>
                        <li className='mb-10'>
                            <Link to='/destination' onClick={() => setToggleMenu(false)} className='bg-opacity-white'><span className='font-bold'>01</span> Destination</Link>
                        </li>
                        <li className='mb-10'>
                            <Link to='/crew' onClick={() => setToggleMenu(false)} className='bg-opacity-white'><span className='font-bold'>02</span> Crew</Link>
                        </li>
                        <li className='mb-10'>
                            <Link to='/technology' onClick={() => setToggleMenu(false)} className='bg-opacity-white'><span className='font-bold'>03</span> Technology</Link>
                        </li>
                    </ul>
                </div>
            }

            <Outlet />
        </div>
    )
}

export default Layout