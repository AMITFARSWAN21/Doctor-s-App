import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();

  // Sample appointment data stored in localStorage
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Check if the logged-in user is an admin
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (!loggedInUser || loggedInUser.role !== 'admin') {
      navigate('/'); // Redirect non-admin users to the home page
    }

    // Fetch appointments from localStorage (or replace with a real API call)
    const storedAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
    setAppointments(storedAppointments);
  }, [navigate]);

  // Function to handle accepting an appointment
  const handleAccept = (id) => {
    const updatedAppointments = appointments.map((appointment) => 
      appointment.id === id ? { ...appointment, status: 'Accepted' } : appointment
    );
    setAppointments(updatedAppointments);
    localStorage.setItem('appointments', JSON.stringify(updatedAppointments)); // Save updated appointments to localStorage
  };

  // Function to handle rejecting an appointment
  const handleReject = (id) => {
    const updatedAppointments = appointments.filter((appointment) => appointment.id !== id);
    setAppointments(updatedAppointments);
    localStorage.setItem('appointments', JSON.stringify(updatedAppointments)); // Remove rejected appointment
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="h-2 bg-gradient-to-r from-blue-500 to-indigo-600"></div>

        <div className="px-8 py-10">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-6">
            Admin Dashboard
          </h2>

          <div className="space-y-6">
            {appointments.length === 0 ? (
              <p>No appointments available</p>
            ) : (
              appointments.map((appointment) => (
                <div key={appointment.id} className="bg-white p-4 rounded shadow mb-4">
                  <h3 className="font-bold text-xl">{appointment.patientName}</h3>
                  <p><strong>Email:</strong> {appointment.patientEmail}</p>
                  <p><strong>Appointment Date:</strong> {appointment.date}</p>
                  <p><strong>Status:</strong> {appointment.status}</p>

                  <div className="mt-4 flex space-x-4">
                    {appointment.status === 'Pending' && (
                      <>
                        <button
                          onClick={() => handleAccept(appointment.id)}
                          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
                        >
                          Accept
                        </button>
                        <button
                          onClick={() => handleReject(appointment.id)}
                          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
                        >
                          Reject
                        </button>
                      </>
                    )}
                    {appointment.status !== 'Pending' && (
                      <span className="text-gray-500">Appointment {appointment.status}</span>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
