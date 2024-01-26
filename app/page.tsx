"use client"

import Banner from "@/components/Banner";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"
import { IoMdGitNetwork } from "react-icons/io"
import { BiChip } from "react-icons/bi"
import { AiFillFlag } from "react-icons/ai";
import { ReactElement } from "react";
import { events } from "@/constants";
import Link from "next/link";


type featuresTypes = {
  title: string,
  content: string,
  icon: ReactElement
}

export default function Home() {

  const iconSize = 60;

  const features: featuresTypes[] = [
    {
      title: "Networking",
      content: "Our events are curated to provide students with opportunities to build meaningful connections.",
      icon: <IoMdGitNetwork size={iconSize} />
    },
    {
      title: "Skill Enhancement",
      content: "The AIML Club is committed to enhancing your skill set and preparing you.",
      icon: <AiFillFlag size={iconSize} />
    },
    {
      title: "Development",
      content: "Leadership is not just about leading; it's about inspiring and contributing to a collective vision. ",
      icon: <BiChip size={iconSize} />
    }
  ]


  return (
    <div>
      <Banner
        title="AIML club mriirs"
        subtitle="A non-profit network of college coding clubs and makers around the world, for the students ,by the students." />

      <div className="relative lg:top-[52vh] top-[60vh]">
        <div className="flex justify-center items-center text-center ">
          <h1 className="md:m-40 m-10 font-bold text-5xl border-b-4 border-red-500">What We Do</h1>
        </div>
        <div className="flex">

        </div>

        {/* <div className="border text-center h-96">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}>
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
          </Swiper>
        </div> */}
        <div className="flex md:flex-row flex-col gap-5 px-20">

          {
            features.map((feature) => (
              <div className="flex flex-col items-center text-center md:w-1/3 gap-3" key={feature.title}>
                <span className="p-4 rounded-full bg-red-500 text-white">{feature.icon}</span>
                <h2 className="font-semibold text-3xl">{feature.title}</h2>
                <p className="font-light md:w-1/2">{feature.content}</p>
              </div>
            ))
          }
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="flex justify-center items-center text-center ">
            <h1 className="md:m-20 m-10 font-bold text-5xl border-b-4 border-red-500">Events</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4">
            {
              events.map((event, index) => (
                <Link href={`/events/${event.id}`} className={`${index < 3 ? "flex": "hidden"} flex-col items-center text-center gap-3`} key={event.id}>
                  <img src={event.image_src} alt="" width={200} className="rounded-xl" />
                  <h1 className="text-red-500 text-3xl font-extrabold tracking-wide">{event.title}</h1>
                  <span className="text-gray-700">{event.date}</span>
                  <p className="md:w-1/2">{event.description}</p>
                </Link>
              ))
            }
          </div>
          <Link href={"/events"} className="px-5 py-2 rounded-full border-red-500 border-2 text-red-500 font-medium hover:bg-red-500 hover:text-white transition-all duration-200">View All Events</Link>
        </div>
      </div>


    </div >
  )
}
