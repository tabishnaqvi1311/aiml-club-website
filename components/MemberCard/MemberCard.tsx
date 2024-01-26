import { createAvatar } from '@/utils/utils'
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
  // const colors = ["4CAF50", "2196F3", "9C27B0"];
  return (
    <div className='flex lg:flex-row flex-col justify-center items-center shadow-md hover:shadow-lg rounded-lg p-10 gap-7'>
      <div>
        {
          member.profile_pic === "https://bit.ly/kent-c-dodds"
            ?

            <div
              className={`bg-[#1e77c1] text-white lg:h-[150px] lg:w-[150px] h-[100px] w-[100px] rounded-xl flex justify-center items-center`}>
              <span className='tracking-widest lg:text-5xl font-semibold'>{createAvatar(member.name)}</span>
            </div>
            :
            <img src={member.profile_pic} alt={member.name} width={200} className='lg:h-[200px] h-[100px] object-cover rounded-xl' />
        }
      </div>
      <div className='flex flex-col justify-center gap-4'>
        <h1 className='text-red-500 font-bold lg:text-lg'>{member.name}</h1>
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
