import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-4 lg:px-20">
        
        {/*------------- Left side ---------------*/}
        <div className="flex flex-col space-y-6 lg:w-1/2">
          <p className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
            Book Appointment <br />
            With Trusted Doctors
          </p>

          <div className="flex items-center space-x-3">
            <img src={assets.group_profiles} alt="Group Profiles" className="h-20 w-20 rounded-full" />
            <p className="text-gray-600 text-lg">
              Simply browse through our list of doctors <br />
              and book an appointment with the one that suits you best.
            </p>
          </div>
          <a
  href="#specialities"
  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
>
  Book Appointment
  <img src={assets.arrow_icon} alt="Arrow" className="ml-2 h-5 w-5" />
</a>

        </div>

        {/*------------------ Right side ------------*/}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={assets.header_img}
            alt="Header"
            className="w-full lg:w-[500px] rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  )
}

export default Header
