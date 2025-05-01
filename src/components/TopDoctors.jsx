import React from 'react'
import { doctors } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { scrollToTop } from '../utils/scrollUtils'

const TopDoctors = () => {
  const navigate = useNavigate();

  const handleDoctorClick = (doctorId) => {
    scrollToTop();
    navigate(`/appointment/${doctorId}`);
  };

  const handleMoreClick = () => {
    scrollToTop();
    navigate('/doctors');
  };

  return (
    <div className='w-full py-20 bg-gray-50 flex flex-col items-center justify-center'>
      <h1 className='text-4xl font-bold text-gray-800 mb-4'>Top Doctors to Book</h1>
      <p className='text-gray-600 mb-8'>Simply browse through the extensive list of trusted doctors</p>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-10'>
        {doctors.slice(0, 10).map((item, index) => (
          <div onClick={() => handleDoctorClick(item._id)}
            key={index}
            className='flex flex-col items-center bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300 cursor-pointer'
          >
            <img
              src={item.image}
              alt=""
              className='w-24 h-24 object-cover rounded-full mb-4 border-4 border-gray-100'
            />
            <div className='text-center'>
              <div className='bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full mb-2'>
                Available
              </div>
              <p className='text-lg font-semibold text-gray-800'>{item.name}</p>
              <p className='text-gray-600'>{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>

      <button onClick={handleMoreClick} className='mt-8 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300'>
        More
      </button>
    </div>
  )
}

export default TopDoctors
