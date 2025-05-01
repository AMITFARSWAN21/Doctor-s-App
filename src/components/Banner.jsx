import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    navigate('/login');
  }

  return (
    <div className="w-full py-12 bg-gray-100 flex flex-col lg:flex-row items-center justify-around">
      
      {/* Left Side (Text and Button) */}
      <div className="text-center lg:text-left space-y-2">
        <p className="text-3xl font-semibold text-gray-800">
          Book Appointment
        </p>
        <p className="text-lg text-gray-600">
          With 100+ Trusted Doctors
        </p>
        <button 
          onClick={handleCreateAccount}
          className="mt-3 bg-blue-600 text-white px-4 py-1.5 rounded-full hover:bg-blue-700 transition duration-300"
        >
          Create Account
        </button>
      </div>

      {/* Right Side (Image) */}
      <div className="mt-6 lg:mt-0">
        <img src={assets.appointment_img} alt="Appointment" className="w-64 h-auto rounded-md shadow-md" />
      </div>
      
    </div>
  )
}

export default Banner
