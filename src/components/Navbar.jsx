import React from 'react'
import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'

const Navbar = () => {
    return (
        <nav className='flex items-center justify-center w-full py-6'>
            <img src={logo} alt="hoobank" className='w-[125px] h-[32px]' />
            <ul className='items-center justify-end flex-1 list-none sm:flex'>
                {navLinks.map((nav, index) => (
                    <li
                        className={`font-normal font-poppins cursor-pointer
                 text-white ${index === navLinks.length - 1 ? mr - 0 : mr - 10}`}
                    >
                        <a href={`#${nav.id}`}>{`${nav.title}`}</a>
                    </li>

                ))}
            </ul>
        </nav>
    )
}

export default Navbar