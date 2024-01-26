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
        <a href='https://www.linkedin.com/in/avaraneeya-aiml-executive-society-18a07a28a' target='_blank'><FaLinkedin size={iconSize} /></a>
        <a href='https://instagram.com/avaraneeya.aiml.club?igshid=MjEwN2IyYWYwYw==' target='_blank'><FaInstagram size={iconSize} /></a>
      </div>
    </>
  )
}

export default NavbarDesktop
