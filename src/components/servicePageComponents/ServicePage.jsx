import React from 'react'
import OurServices from '../homepageComponents/OurServices'

export default function ServicePage() {
  return (
      <div>
          <div className="w-full bg-[#f1efef] pb-10 pt-26  px-6 flex flex-col justify-end items-center text-center min-h-[40vh]">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Services
              </h1>


              <p className="max-w-3xl text-black text-lg leading-relaxed mb-12">
                  Home / Services
              </p>
          </div>
          <OurServices/>
    </div>
  )
}
