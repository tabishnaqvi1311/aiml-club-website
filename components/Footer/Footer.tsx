import Link from 'next/link'
import React from 'react'
import { FaInstagram, FaLinkedin } from 'react-icons/fa6'

const Footer = () => {
    return (
        <div className='bg-[#010249] flex md:flex-row flex-col gap-10 justify-between p-10 relative top-[66vh] text-white'>
            <div className=' flex flex-col gap-2'>
                <h1 className='text-red-500 font-bold text-2xl'>AIML Club</h1>
                <Link href={"/events"} className='font-light text-lg'>Events</Link>
                <Link href={"/members"} className='font-light text-lg'>Our Team</Link>
                <Link href={"/projects"} className='font-light text-lg' >Projects</Link>
            </div>
            <div className='flex flex-col gap-2 md:w-1/3'>
                <h1 className='text-red-500 font-bold text-2xl'>Address</h1>
                <p className='font-light text-lg'>
                    Manav Rachna Campus Rd, Gadakhor Basti Village, Sector 43, Faridabad, Haryana 121004
                </p>
                <p className='font-light text-lg'>
                    All rights reserved, AIML CLub MRIIRS
                    Designed with ♥ Haider Abdi
                </p>
            </div>
            <div className='flex flex-col gap-2'>
                <h1 className='text-red-500 font-bold text-2xl'>Socials</h1>
                <a><FaInstagram size={25} /></a>
                <a><FaLinkedin size={25} /></a>
            </div>
        </div>
    )
}

export default Footer
