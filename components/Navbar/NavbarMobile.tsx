"use client";

import Link from 'next/link';
import React, { useState } from 'react'
import { FaInstagram, FaLinkedin } from 'react-icons/fa6';
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";

const NavbarMobile = () => {

  const [toggle, setToggle] = useState(false);
  const iconSize = 20;

  return (
    <>
      {toggle && <div className='absolute z-20 bg-transparent w-full top-0 bottom-0 h-screen' onClick={() => setToggle(false)} />}
      <div className='block sm:hidden'>
        <div onClick={() => setToggle(prev => !prev)}>{!toggle ? <GiHamburgerMenu size={35} /> : <CgClose size={35} />}</div>
        {toggle && <>
          <div className='flex flex-col gap-5 text-lg bg-slate-100 p-7 text-gray-700 font-semibold items-center rounded-xl absolute top-20 right-10'>
            <Link href={"/events"}>Events</Link>
            <Link href={"/members"}>Members</Link>
            <Link href={"/projects"}>Projects</Link>

            <a href='https://www.linkedin.com/in/avaraneeya-aiml-executive-society-18a07a28a' target='_blank'><FaLinkedin size={iconSize} /></a>
            <a href='https://instagram.com/avaraneeya.aiml.club?igshid=MjEwN2IyYWYwYw==' target='_blank'><FaInstagram size={iconSize} /></a>
          </div>
        </>
        }
      </div>
    </>
  )
}

export default NavbarMobile
