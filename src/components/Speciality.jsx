import React from 'react'
import { specialityData } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { scrollToTop } from '../utils/scrollUtils'

const Speciality = () => {
  const navigate = useNavigate();

  const handleSpecialtyClick = (specialty) => {
    scrollToTop();
    navigate(`/doctors/${specialty}`);
  };

  return (
    <div id='specialities' className='w-full py-20 bg-white flex flex-col items-center justify-center'>
      <h1 className='text-4xl font-bold text-gray-800 mb-4'>Find By Specialities</h1>
      <p className='text-gray-600 mb-8'>Simply browse through our list of trusted doctors</p>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-10'>
        {specialityData.map((item, index) => (
          <div
            key={index}
            onClick={() => handleSpecialtyClick(item.speciality)}
            className='flex flex-col items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 cursor-pointer'
          >
            <div className='overflow-hidden rounded-full'>
              <img
                src={item.image}
                alt={item.speciality}
                className='w-20 h-20 object-cover rounded-full mb-2 transform transition-transform duration-300 hover:scale-110'
              />
            </div>
            <p className='text-gray-700 font-medium'>{item.speciality}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Speciality
