import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { scrollToTop } from '../utils/scrollUtils'

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    scrollToTop()
    loadAppointments()
  }, [])

  const loadAppointments = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/appointments')
      const data = response.data
      setAppointments(data.sort((a, b) => new Date(b.date) - new Date(a.date)))
    } catch (err) {
      setError('Failed to load appointments')
      console.error('Error loading appointments:', err)
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const deleteAppointment = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/appointments/${id}`)
      // Remove from state after successful deletion
      setAppointments((prev) => prev.filter((appt) => appt.id !== id))
    } catch (error) {
      console.error('Failed to delete appointment:', error)
      alert('Failed to delete appointment. Please try again.')
    }
  }
  

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">My Appointments</h1>

        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6">
            {error}
          </div>
        )}

        {appointments.length === 0 ? (
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <p className="text-gray-600 text-lg">No appointments found</p>
            <p className="text-gray-500 mt-2">Book an appointment with one of our doctors to get started.</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {appointments.map((appointment) => (
              <div
                key={appointment.id}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                {/* Removed image and adjusted layout */}
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-800">{appointment.doctorName}</h2>
                      <p className="text-blue-600">{appointment.doctorSpeciality}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          appointment.status === 'pending'
                            ? 'bg-yellow-100 text-yellow-700'
                            : appointment.status === 'completed'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-red-100 text-red-700'
                        }`}
                      >
                        {appointment.status
                          ? appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)
                          : 'Unknown'}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-600 text-sm">Appointment Date</p>
                      <p className="font-medium">{formatDate(appointment.date)}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Time</p>
                      <p className="font-medium">{appointment.time}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Patient Name</p>
                      <p className="font-medium">{appointment.name}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Consultation Fee</p>
                      <p className="font-medium text-blue-600">${appointment.fees}</p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="text-gray-600 text-sm">Reason for Visit</p>
                    <p className="mt-1">{appointment.reason}</p>
                  </div>

                  <div className="mt-4 text-right">
                    <button
                      onClick={() => deleteAppointment(appointment.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md shadow"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default MyAppointments
