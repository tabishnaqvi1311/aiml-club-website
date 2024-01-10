import Image from 'next/image'
import React from 'react'
import { FaGithub, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6"

type Member = {
  profile_pic: string,
  name: string,
  por: string,
  date: string
}

type MemberCardProps = {
  member: Member
}

const MemberCard = ({ member }: MemberCardProps) => {
  return (
    <div className='flex justify-center items-center shadow-md hover:shadow-lg rounded-lg p-10 gap-7'>
      <div>
        <img src={member.profile_pic} alt={member.name} width={20} />
      </div>
      <div className='flex flex-col justify-center gap-4'>
        <h1 className='text-red-500 font-bold text-lg'>{member.name}</h1>
        <span>{member.por}</span>
        <span>{member.date}</span>
        <div className='flex gap-2'>
          <span className='socials'><FaTwitter /></span>
          <span className='socials'><FaGithub /></span>
          <span className='socials'><FaInstagram /></span>
          <span className='socials'><FaLinkedin /></span>
        </div>
      </div>
    </div>
  )
}

export default MemberCard
