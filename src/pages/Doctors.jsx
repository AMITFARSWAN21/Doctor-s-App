import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doctors, specialityData } from '../assets/assets';
import { scrollToTop } from '../utils/scrollUtils';
import { motion } from 'framer-motion';

const Doctors = () => {
  const { speciality: urlSpeciality } = useParams();
  const navigate = useNavigate();
  const [selectedSpeciality, setSelectedSpeciality] = useState(urlSpeciality || 'All');

  useEffect(() => {
    scrollToTop();
  }, [urlSpeciality]);

  const filteredDoctors = selectedSpeciality === 'All'
    ? doctors
    : doctors.filter(doctor => doctor.speciality.toLowerCase() === selectedSpeciality.toLowerCase());

  const handleSpecialityChange = (speciality) => {
    setSelectedSpeciality(speciality);
    if (speciality === 'All') {
      navigate('/doctors');
    } else {
      navigate(`/doctors/${speciality}`);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='w-full py-12 bg-gradient-to-b from-blue-50 to-white min-h-screen'
    >
      <div className='container mx-auto px-4'>
        {/* Page Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className='text-center mb-12'
        >
          <h1 className='text-3xl md:text-5xl font-bold text-gray-800 mb-4 font-serif'>
            {selectedSpeciality === 'All' ? 'Our Expert Doctors' : `${selectedSpeciality} Specialists`}
          </h1>
          <div className='w-24 h-1 bg-blue-500 mx-auto mb-4 rounded-full'></div>
          <p className='text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed'>
            {selectedSpeciality === 'All'
              ? 'Discover our team of highly qualified and experienced medical professionals dedicated to your health and well-being'
              : `Meet our specialized ${selectedSpeciality} doctors, experts in their field with years of experience`}
          </p>
        </motion.div>

        <div className='flex flex-col md:flex-row gap-8'>
          {/* Sidebar Filters */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className='w-full md:w-72 bg-white p-6 rounded-2xl shadow-lg h-fit border border-gray-100 sticky top-4'
          >
            <h2 className='text-xl font-semibold text-gray-800 mb-5 font-serif flex items-center'>
              <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path>
              </svg>
              Specialties
            </h2>
            <div className='space-y-3'>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleSpecialityChange('All')}
                className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 flex items-center gap-3 ${
                  selectedSpeciality === 'All'
                    ? 'bg-blue-100 text-blue-700 border-2 border-blue-200 shadow-md'
                    : 'hover:bg-gray-50 text-gray-700 border border-gray-100 hover:border-blue-200'
                }`}
              >
                <span className='text-xl'>👨‍⚕️</span>
                <span className='font-medium'>All Specialties</span>
              </motion.button>

              {specialityData.map((speciality) => (
                <motion.button
                  key={speciality.speciality}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleSpecialityChange(speciality.speciality)}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 flex items-center gap-3 ${
                    selectedSpeciality === speciality.speciality
                      ? 'bg-blue-100 text-blue-700 border-2 border-blue-200 shadow-md'
                      : 'hover:bg-gray-50 text-gray-700 border border-gray-100 hover:border-blue-200'
                  }`}
                >
                  <img src={speciality.image} alt={speciality.speciality} className='w-6 h-6' />
                  <span className='font-medium'>{speciality.speciality}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Doctors Grid */}
          <div className='flex-1'>
            {filteredDoctors.length === 0 ? (
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
                className='flex flex-col items-center justify-center bg-white p-8 rounded-2xl shadow-md h-64'
              >
                <svg className="w-16 h-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 14h.01M5.8 21h12.4a2 2 0 002-2V5a2 2 0 00-2-2H5.8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                </svg>
                <p className='text-gray-600 text-lg'>No doctors found for this specialty</p>
              </motion.div>
            ) : (
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {filteredDoctors.map((doctor, index) => (
                  <motion.div
                    key={doctor._id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onClick={() => navigate(`/appointment/${doctor._id}`)}
                    className='group flex flex-col items-center bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-blue-300 hover:translate-y-[-4px]'
                  >
                    <div className='relative mb-4'>
                      <div className='w-28 h-28 rounded-full p-1 bg-gradient-to-r from-blue-400 to-indigo-500'>
                        <img
                          src={doctor.image}
                          alt={doctor.name}
                          className='w-full h-full object-cover rounded-full border-4 border-white'
                        />
                      </div>
                      <div className='absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-green-100 text-green-700 text-xs px-4 py-1 rounded-full font-medium border border-green-200 shadow-sm'>
                        <div className='flex items-center'>
                          <span className='w-2 h-2 bg-green-500 rounded-full mr-1.5 animate-pulse'></span>
                          Available
                        </div>
                      </div>
                    </div>
                    <div className='text-center w-full'>
                      <h3 className='text-xl font-semibold text-gray-800 mb-1.5 font-serif group-hover:text-blue-700'>{doctor.name}</h3>
                      <p className='text-blue-600 text-sm font-medium mb-3 bg-blue-50 py-1 px-3 rounded-full inline-block'>{doctor.speciality}</p>
                      <div className='flex items-center justify-center gap-2 text-gray-600 text-sm mb-3'>
                        <div className='flex items-center gap-1 bg-gray-50 px-3 py-1.5 rounded-lg'>
                          <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                          <span>{doctor.experience} Experience</span>
                        </div>
                      </div>
                      <div className='border-t border-gray-100 pt-3 mt-1'>
                        <div className='flex items-center justify-center gap-1.5'>
                          <span className='text-2xl font-bold text-blue-600'>${doctor.fees}</span>
                          <span className='text-gray-500 text-sm'>/visit</span>
                        </div>
                        <button className='mt-4 w-full bg-blue-50 hover:bg-blue-100 text-blue-700 font-medium py-2 px-4 rounded-xl transition-all duration-300 border border-blue-200'>
                          Book Appointment
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Doctors;
