import React from 'react'
import NavbarDesktop from './NavbarDesktop'
import logo from "@/app/assets/logo.png";
import Image from 'next/image';
import NavbarMobile from './NavbarMobile';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='flex md:justify-evenly justify-between items-center py-5 px-10 bg-transparent text-white'>
      <Link href={"/"}>
        <Image src={logo} alt="Logo" width={100} />
      </Link>
      <NavbarDesktop />
      <NavbarMobile />
    </div>
  )
}

export default Navbar
