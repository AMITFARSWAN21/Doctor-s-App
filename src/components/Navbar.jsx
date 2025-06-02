import React, { useState, useEffect } from 'react';
import { assets } from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentUser, setCurrentUser] = useState(() => {
    return JSON.parse(localStorage.getItem('loggedInUser'));
  });

  useEffect(() => {
    const handleAuthChange = () => {
      const user = JSON.parse(localStorage.getItem('loggedInUser'));
      setCurrentUser(user);
    };

    const handleStorageChange = (e) => {
      if (e.key === 'loggedInUser') {
        const user = e.newValue ? JSON.parse(e.newValue) : null;
        setCurrentUser(user);
      }
    };

    const intervalId = setInterval(() => {
      const storedUser = JSON.parse(localStorage.getItem('loggedInUser'));
      setCurrentUser((prevUser) => {
        if (JSON.stringify(prevUser) !== JSON.stringify(storedUser)) {
          return storedUser;
        }
        return prevUser;
      });
    }, 1000);

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('authChange', handleAuthChange);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('authChange', handleAuthChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    setCurrentUser(null);
    setShowDropdown(false);
    window.dispatchEvent(new Event('authChange'));
    navigate('/');
  };

  return (
    <div className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img 
            onClick={() => navigate('/')} 
            src={assets.logo} 
            alt="Logo" 
            className="h-30 w-25 cursor-pointer" 
          />
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex space-x-6 items-center">
          {["/", "/doctors","/my-appointments", "/about"].map((path, index) => {
            const names = ["Home", "Doctors", "My Appointments", "About"];
            return (
              <NavLink 
                key={path} 
                to={path} 
                className={({ isActive }) =>
                  `text-gray-600 hover:text-blue-600 transition-colors duration-300 ${isActive ? 'text-blue-600 font-medium' : 'font-medium'}`
                }
              >
                {names[index]}
              </NavLink>
            );
          })}

          {/* Reports (visible only when logged in) */}
          {currentUser && (
            <NavLink
              to="/reports"
              className={({ isActive }) =>
                `text-gray-600 hover:text-blue-600 transition-colors duration-300 ${isActive ? 'text-blue-600 font-medium' : 'font-medium'}`
              }
            >
              Reports
            </NavLink>
          )}
        </ul>

        {/* Profile/Login */}
        <div className="relative dropdown">
          {currentUser ? (
            <div
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <img
                className="h-10 w-10 rounded-full border-2 border-blue-300 hover:border-blue-500 transition-all duration-300"
                src={assets.profile_pic}
                alt="Profile"
              />
              <span className="hidden sm:block text-gray-700 font-medium">
                {currentUser.name}
              </span>
              <img
                className="h-5 w-5"
                src={assets.dropdown_icon}
                alt="Dropdown"
              />
            </div>
          ) : (
            <button
              onClick={() => navigate('/profile')}
              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg hover:from-blue-600 hover:to-blue-800 transition duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
            >
              Create Account
            </button>
          )}

          {/* Dropdown */}
          {showDropdown && currentUser && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50 overflow-hidden">
              <ul className="flex flex-col">
                <li className="px-4 py-3 hover:bg-blue-50 cursor-pointer flex items-center space-x-2 border-b border-gray-100" 
                    onClick={() => { setShowDropdown(false); navigate('/user-profile'); }}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>Profile</span>
                </li>
                <li className="px-4 py-3 hover:bg-blue-50 cursor-pointer flex items-center space-x-2 border-b border-gray-100" 
                    onClick={() => { setShowDropdown(false); navigate('/my-appointments'); }}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>My Appointments</span>
                </li>

                <li className="px-4 py-3 hover:bg-blue-50 cursor-pointer flex items-center space-x-2 border-b border-gray-100" 
                    onClick={() => { setShowDropdown(false); navigate('/reports'); }}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2a2 2 0 012-2h6a2 2 0 012 2v2m-2 4H9a2 2 0 01-2-2v-2a2 2 0 012-2h10a2 2 0 012 2v2a2 2 0 01-2 2z" />
                  </svg>
                  <span>Reports</span>
                </li>

                <li className="px-4 py-3 hover:bg-red-50 cursor-pointer flex items-center space-x-2 text-red-600" 
                    onClick={handleLogout}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  <span>Logout</span>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
