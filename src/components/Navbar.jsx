import React, { useState, useEffect } from 'react';
import { assets } from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';
import { getCurrentUser, logoutUser } from '../services/userService';

const Navbar = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = getCurrentUser();
    setCurrentUser(user);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown')) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    logoutUser();
    setCurrentUser(null);
    setShowDropdown(false);
    navigate('/');
  };

  return (
    <div className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">

        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img onClick={() => navigate('/')} src={assets.logo} alt="Logo" className="h-20 w-20" />
          <span className="text-2xl font-semibold text-gray-800"></span>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <NavLink to="/" className="text-gray-600 hover:text-blue-600 font-medium">
            Home
          </NavLink>
          <NavLink
            to="/doctors"
            className={({ isActive }) =>
              `text-gray-600 hover:text-blue-600 transition-colors duration-300 ${isActive ? 'text-blue-600 font-medium' : ''
              }`
            }
          >
            Doctors
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `text-gray-600 hover:text-blue-600 transition-colors duration-300 ${isActive ? 'text-blue-600 font-medium' : ''
              }`
            }
          >
            Blog
          </NavLink>
          <NavLink to="/my-appointments" className="text-gray-600 hover:text-blue-600 font-medium">
            My Appointments
          </NavLink>
          <NavLink to="/about" className="text-gray-600 hover:text-blue-600 font-medium">
            About
          </NavLink>

        </ul>

        {/* Account Button or Profile */}
        <div className="relative dropdown">
          {currentUser ? (
            <div
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <img
                className="h-10 w-10 rounded-full border-2 border-gray-300"
                src={assets.profile_pic}
                alt="Profile"
              />
              <img
                className="h-5 w-5 text-gray-600 hover:text-blue-600 transition duration-300"
                src={assets.dropdown_icon}
                alt="Dropdown"
              />
            </div>
          ) : (
            <button
              onClick={() => navigate('/profile')}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Create Account
            </button>
          )}

          {/* Dropdown Menu */}
          {showDropdown && currentUser && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-md">
              <ul className="flex flex-col">
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setShowDropdown(false);
                    navigate('/profile');
                  }}
                >
                  Profile
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setShowDropdown(false);
                    navigate('/my-appointments');
                  }}
                >
                  My Appointments
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-600"
                  onClick={handleLogout}
                >
                  Logout
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
