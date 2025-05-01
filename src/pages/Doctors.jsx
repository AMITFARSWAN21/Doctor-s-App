import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { doctors, specialityData } from '../assets/assets'
import { scrollToTop } from '../utils/scrollUtils'

const Doctors = () => {
  const { speciality: urlSpeciality } = useParams()
  const navigate = useNavigate()
  const [selectedSpeciality, setSelectedSpeciality] = useState(urlSpeciality || 'All')

  // Scroll to top when component mounts or when URL changes
  useEffect(() => {
    scrollToTop();
  }, [urlSpeciality]);

  // Filter doctors based on selected specialty
  const filteredDoctors = selectedSpeciality === 'All'
    ? doctors
    : doctors.filter(doctor => doctor.speciality.toLowerCase() === selectedSpeciality.toLowerCase())

  const handleSpecialityChange = (speciality) => {
    setSelectedSpeciality(speciality)
    if (speciality === 'All') {
      navigate('/doctors')
    } else {
      navigate(`/doctors/${speciality}`)
    }
  }

  return (
    <div className='w-full py-8 bg-gradient-to-b from-gray-50 to-white min-h-screen'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-10'>
          <h1 className='text-3xl md:text-4xl font-bold text-gray-800 mb-3 font-serif'>
            {selectedSpeciality === 'All' ? 'Our Expert Doctors' : `${selectedSpeciality} Specialists`}
          </h1>
          <p className='text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed'>
            {selectedSpeciality === 'All'
              ? 'Discover our team of highly qualified and experienced medical professionals dedicated to your health and well-being'
              : `Meet our specialized ${selectedSpeciality} doctors, experts in their field with years of experience`}
          </p>
        </div>

        <div className='flex flex-col md:flex-row gap-6'>
          {/* Sidebar Filters */}
          <div className='w-full md:w-64 bg-white p-5 rounded-xl shadow-lg h-fit border border-gray-100'>
            <h2 className='text-xl font-semibold text-gray-800 mb-4 font-serif'>Specialties</h2>
            <div className='space-y-2'>
              <button
                onClick={() => handleSpecialityChange('All')}
                className={`w-full text-left px-3 py-2.5 rounded-lg transition-all duration-300 flex items-center gap-2 text-sm ${selectedSpeciality === 'All'
                  ? 'bg-blue-50 text-blue-700 border-2 border-blue-200'
                  : 'hover:bg-gray-50 text-gray-700 border border-gray-100'
                  }`}
              >
                <span className='text-base'>👨‍⚕️</span>
                <span className='font-medium'>All Specialties</span>
              </button>
              {specialityData.map((speciality) => (
                <button
                  key={speciality.speciality}
                  onClick={() => handleSpecialityChange(speciality.speciality)}
                  className={`w-full text-left px-3 py-2.5 rounded-lg transition-all duration-300 flex items-center gap-2 text-sm ${selectedSpeciality === speciality.speciality
                    ? 'bg-blue-50 text-blue-700 border-2 border-blue-200'
                    : 'hover:bg-gray-50 text-gray-700 border border-gray-100'
                    }`}
                >
                  <img
                    src={speciality.image}
                    alt={speciality.speciality}
                    className='w-5 h-5'
                  />
                  <span className='font-medium'>{speciality.speciality}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Doctors Grid */}
          <div className='flex-1'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
              {filteredDoctors.map((doctor) => (
                <div
                  key={doctor._id}
                  onClick={() => navigate(`/appointment/${doctor._id}`)}
                  className='group flex flex-col items-center bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-blue-200'
                >
                  <div className='relative mb-3'>
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className='w-24 h-24 object-cover rounded-full border-4 border-gray-100 group-hover:border-blue-100 transition-all duration-300'
                    />
                    <div className='absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-medium'>
                      Available
                    </div>
                  </div>
                  <div className='text-center'>
                    <h3 className='text-lg font-semibold text-gray-800 mb-1 font-serif'>{doctor.name}</h3>
                    <p className='text-blue-600 text-sm font-medium mb-2'>{doctor.speciality}</p>
                    <div className='flex items-center justify-center gap-1.5 text-gray-500 text-sm mb-2'>
                      <span>⭐</span>
                      <span>{doctor.experience} Experience</span>
                    </div>
                    <div className='flex items-center justify-center gap-1'>
                      <span className='text-xl font-bold text-blue-600'>${doctor.fees}</span>
                      <span className='text-gray-500 text-sm'>/visit</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Doctors
