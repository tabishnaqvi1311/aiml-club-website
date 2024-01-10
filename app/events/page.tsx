import Banner from '@/components/Banner'
import { events } from '@/constants'
import React from 'react'


export default function page() {
  return (
    <div>
      <Banner title='events' subtitle='Organizing Events That Help You In The Long Run' />
      <div className="flex flex-col justify-center items-center relative top-[60vh]">
        <div className="flex justify-center items-center text-center ">
          <h1 className="md:m-20 m-10 font-bold text-5xl border-b-4 border-red-500">Events</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4">
          {
            events.map((event) => (
              <div className="flex flex-col items-center text-center gap-3">
                <img src={event.image_src} alt="" width={200} className="rounded-xl" />
                <h1 className="text-red-500 text-3xl font-extrabold tracking-wide">{event.title}</h1>
                <span className="text-gray-700">{event.date}</span>
                <p className="md:w-1/2">{event.description}</p>
              </div>
            ))
          }
        </div>
      </div>

    </div>
  )
}
