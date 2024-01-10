import Link from 'next/link'
import React from 'react'
import { FaInstagram, FaLinkedin } from 'react-icons/fa6'

const NavbarDesktop = () => {

    const iconSize = 30

    return (
        <>
            <div className='sm:flex hidden gap-10 text-lg'>
                <Link href={"/events"}>Events</Link>
                <Link href={"/members"}>Members</Link>
                <Link href={"/projects"}>Projects</Link>
            </div>
            <div className='sm:flex hidden gap-5'>
                <a><FaInstagram size={iconSize} /></a>
                <a><FaLinkedin size={iconSize} /></a>
            </div>
        </>
    )
}

export default NavbarDesktop
