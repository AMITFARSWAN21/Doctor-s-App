import React, { useEffect } from 'react';
import { Routes, Route, useLocation, Navigate, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Doctors from './pages/Doctors';
import Login from './pages/Login';
import About from './pages/About';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import MyAppointments from './pages/MyAppointments';
import Appointment from './pages/Appointment';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Blog from './pages/Blog';
import ChatBot from './components/ChatBot';
import UserProfile from './pages/UserProfile';
import AdminDashboard from './pages/AdminDashboard';
import Privacy from './pages/Privacy';

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('loggedInUser'));

  // Redirect to /profile on initial load if not logged in
  useEffect(() => {
    if (!user && location.pathname === '/') {
      navigate('/profile');
    }
  }, [user, location.pathname, navigate]);

  // Hide Navbar and Footer on /profile
  const hideUIPaths = ['/profile'];

  return (
    <div className="min-h-screen bg-gray-50">
      {!hideUIPaths.includes(location.pathname) && <Navbar />}

      <Routes>
        <Route path='/' element={user ? <Home /> : <Navigate to="/profile" />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/my-appointments' element={<MyAppointments />} />
        <Route path='/appointment/:docId' element={<Appointment />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/user-profile' element={<UserProfile />} />
        <Route path='/admin-dashboard' element={<AdminDashboard />} />
        <Route path='/privacy' element={<Privacy/>} />
      </Routes>

      <ChatBot />

      {!hideUIPaths.includes(location.pathname) && <Footer />}
    </div>
  );
};

export default App;
