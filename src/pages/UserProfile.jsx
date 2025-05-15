import React, { useState, useEffect } from 'react';

export default function UserProfile() {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('loggedInUser')) || {});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    birthday: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    occupation: '',
    company: '',
    bio: '',
    website: '',
    twitter: '',
    linkedin: '',
    github: '',
    age: '',
    gender: '',
    language: '',
    profilePic: '',
    notifications: {
      email: true,
      sms: false,
      promotions: true
    },
    accountType: 'personal',
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (user) {
      setFormData({ ...formData, ...user });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value, files, type, checked } = e.target;
    if (name === 'profilePic' && files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData({ ...formData, profilePic: reader.result });
      };
      reader.readAsDataURL(files[0]);
    } else if (type === 'checkbox') {
      // Handle nested properties for notifications
      if (name.includes('.')) {
        const [parent, child] = name.split('.');
        setFormData({
          ...formData,
          [parent]: {
            ...formData[parent],
            [child]: checked
          }
        });
      } else {
        setFormData({ ...formData, [name]: checked });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSave = () => {
    localStorage.setItem('loggedInUser', JSON.stringify(formData));
    setUser(formData);
    window.dispatchEvent(new Event('authChange'));
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        {/* Header section */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-8">
          <div className="flex flex-col items-center md:flex-row md:items-center md:justify-between">
            <h1 className="text-3xl font-bold text-white">My Profile</h1>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="mt-4 md:mt-0 px-4 py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors"
            >
              {isEditing ? 'Cancel' : 'Edit Profile'}
            </button>
          </div>
        </div>

        {/* Profile content */}
        <div className="px-6 py-8">
          <div className="flex flex-col md:flex-row">
            {/* Profile picture section */}
            <div className="flex flex-col items-center mb-8 md:mb-0 md:mr-10">
              <div className="relative">
                {formData.profilePic ? (
                  <img
                    src={formData.profilePic}
                    alt="Profile"
                    className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                ) : (
                  <div className="w-40 h-40 rounded-full bg-gray-200 flex items-center justify-center text-gray-400 border-4 border-white shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                )}
                {isEditing && (
                  <div className="absolute bottom-0 right-0">
                    <label
                      htmlFor="profile-upload"
                      className="flex items-center justify-center w-10 h-10 bg-blue-500 rounded-full cursor-pointer shadow-md hover:bg-blue-600 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <input
                        id="profile-upload"
                        type="file"
                        name="profilePic"
                        accept="image/*"
                        onChange={handleChange}
                        className="hidden"
                      />
                    </label>
                  </div>
                )}
              </div>
              <h2 className="mt-4 text-xl font-semibold text-gray-800">{formData.name || 'Your Name'}</h2>
              <p className="text-gray-500">{formData.email || 'email@example.com'}</p>
            </div>

            {/* Profile information section */}
            <div className="flex-1">
              <div className="space-y-8">
                {/* Tabs */}
                <div className="border-b border-gray-200">
                  <nav className="flex -mb-px space-x-8">
                    <a href="#" className="border-blue-500 text-blue-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                      Personal Information
                    </a>
                    {/* <a href="#" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                      Account Settings
                    </a>
                    <a href="#" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                      Notifications
                    </a> */}
                  </nav>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Basic Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      {isEditing ? (
                        <input
                          type="text"
                          name="name"
                          value={formData.name || ''}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      ) : (
                        <p className="py-2 text-gray-800">{formData.name || 'Not set'}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <p className="py-2 text-gray-500">{formData.email || 'Not set'}</p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      {isEditing ? (
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone || ''}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      ) : (
                        <p className="py-2 text-gray-800">{formData.phone || 'Not set'}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Birthday</label>
                      {isEditing ? (
                        <input
                          type="date"
                          name="birthday"
                          value={formData.birthday || ''}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      ) : (
                        <p className="py-2 text-gray-800">{formData.birthday || 'Not set'}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                      {isEditing ? (
                        <select
                          name="gender"
                          value={formData.gender || ''}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">Select</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                          <option value="Prefer not to say">Prefer not to say</option>
                        </select>
                      ) : (
                        <p className="py-2 text-gray-800">{formData.gender || 'Not set'}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Language</label>
                      {isEditing ? (
                        <select
                          name="language"
                          value={formData.language || ''}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">Select</option>
                          <option value="English">English</option>
                          <option value="Spanish">Spanish</option>
                          <option value="French">French</option>
                          <option value="German">German</option>
                          <option value="Chinese">Chinese</option>
                          <option value="Japanese">Japanese</option>
                        </select>
                      ) : (
                        <p className="py-2 text-gray-800">{formData.language || 'Not set'}</p>
                      )}
                    </div>
                  </div>

                  <h3 className="text-lg font-medium text-gray-900 mb-4">Professional Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Occupation</label>
                      {isEditing ? (
                        <input
                          type="text"
                          name="occupation"
                          value={formData.occupation || ''}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      ) : (
                        <p className="py-2 text-gray-800">{formData.occupation || 'Not set'}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Company/Organization</label>
                      {isEditing ? (
                        <input
                          type="text"
                          name="company"
                          value={formData.company || ''}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      ) : (
                        <p className="py-2 text-gray-800">{formData.company || 'Not set'}</p>
                      )}
                    </div>
                  </div>

                  <h3 className="text-lg font-medium text-gray-900 mb-4">Contact Information</h3>
                  <div className="grid grid-cols-1 gap-6 mb-8">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                      {isEditing ? (
                        <input
                          type="text"
                          name="address"
                          value={formData.address || ''}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      ) : (
                        <p className="py-2 text-gray-800">{formData.address || 'Not set'}</p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                        {isEditing ? (
                          <input
                            type="text"
                            name="city"
                            value={formData.city || ''}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        ) : (
                          <p className="py-2 text-gray-800">{formData.city || 'Not set'}</p>
                        )}
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">State/Province</label>
                        {isEditing ? (
                          <input
                            type="text"
                            name="state"
                            value={formData.state || ''}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        ) : (
                          <p className="py-2 text-gray-800">{formData.state || 'Not set'}</p>
                        )}
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">ZIP/Postal Code</label>
                        {isEditing ? (
                          <input
                            type="text"
                            name="zipCode"
                            value={formData.zipCode || ''}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        ) : (
                          <p className="py-2 text-gray-800">{formData.zipCode || 'Not set'}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                      {isEditing ? (
                        <select
                          name="country"
                          value={formData.country || ''}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">Select</option>
                          <option value="United States">United States</option>
                          <option value="Canada">Canada</option>
                          <option value="United Kingdom">United Kingdom</option>
                          <option value="Australia">Australia</option>
                          <option value="Germany">Germany</option>
                          <option value="France">France</option>
                          <option value="Japan">Japan</option>
                          <option value="China">China</option>
                          <option value="India">India</option>
                          <option value="Brazil">Brazil</option>
                        </select>
                      ) : (
                        <p className="py-2 text-gray-800">{formData.country || 'Not set'}</p>
                      )}
                    </div>
                  </div>

                  <h3 className="text-lg font-medium text-gray-900 mb-4">Social Profiles</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Website</label>
                      {isEditing ? (
                        <input
                          type="url"
                          name="website"
                          value={formData.website || ''}
                          onChange={handleChange}
                          placeholder="https://example.com"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      ) : (
                        <p className="py-2 text-gray-800">{formData.website || 'Not set'}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Twitter</label>
                      {isEditing ? (
                        <div className="flex">
                          <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                            @
                          </span>
                          <input
                            type="text"
                            name="twitter"
                            value={formData.twitter || ''}
                            onChange={handleChange}
                            className="flex-1 min-w-0 block w-full px-3 py-2 border border-gray-300 rounded-none rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      ) : (
                        <p className="py-2 text-gray-800">{formData.twitter ? `@${formData.twitter}` : 'Not set'}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">LinkedIn</label>
                      {isEditing ? (
                        <input
                          type="text"
                          name="linkedin"
                          value={formData.linkedin || ''}
                          onChange={handleChange}
                          placeholder="username"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      ) : (
                        <p className="py-2 text-gray-800">{formData.linkedin || 'Not set'}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">GitHub</label>
                      {isEditing ? (
                        <input
                          type="text"
                          name="github"
                          value={formData.github || ''}
                          onChange={handleChange}
                          placeholder="username"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      ) : (
                        <p className="py-2 text-gray-800">{formData.github || 'Not set'}</p>
                      )}
                    </div>
                  </div>

                  <h3 className="text-lg font-medium text-gray-900 mb-4">About Me</h3>
                  <div className="mb-8">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                    {isEditing ? (
                      <textarea
                        name="bio"
                        value={formData.bio || ''}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Tell us a little about yourself..."
                      ></textarea>
                    ) : (
                      <p className="py-2 text-gray-800">{formData.bio || 'Not set'}</p>
                    )}
                  </div>

                  <h3 className="text-lg font-medium text-gray-900 mb-4">Notification Preferences</h3>
                  {isEditing ? (
                    <div className="space-y-4 mb-8">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="email-notifications"
                            name="notifications.email"
                            type="checkbox"
                            checked={formData.notifications?.email}
                            onChange={(e) => setFormData({
                              ...formData,
                              notifications: {
                                ...formData.notifications,
                                email: e.target.checked
                              }
                            })}
                            className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="email-notifications" className="font-medium text-gray-700">Email notifications</label>
                          <p className="text-gray-500">Receive email updates about your account activity</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="sms-notifications"
                            name="notifications.sms"
                            type="checkbox"
                            checked={formData.notifications?.sms}
                            onChange={(e) => setFormData({
                              ...formData,
                              notifications: {
                                ...formData.notifications,
                                sms: e.target.checked
                              }
                            })}
                            className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="sms-notifications" className="font-medium text-gray-700">SMS notifications</label>
                          <p className="text-gray-500">Receive text message updates about your account activity</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="promotional-notifications"
                            name="notifications.promotions"
                            type="checkbox"
                            checked={formData.notifications?.promotions}
                            onChange={(e) => setFormData({
                              ...formData,
                              notifications: {
                                ...formData.notifications,
                                promotions: e.target.checked
                              }
                            })}
                            className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="promotional-notifications" className="font-medium text-gray-700">Promotional emails</label>
                          <p className="text-gray-500">Receive marketing and promotional offers</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-gray-50 p-4 rounded-md mb-8">
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <span className={`mr-2 ${formData.notifications?.email ? 'text-green-500' : 'text-gray-400'}`}>
                            {formData.notifications?.email ? '✓' : '✗'}
                          </span>
                          <span className="text-gray-700">Email notifications</span>
                        </li>
                        <li className="flex items-center">
                          <span className={`mr-2 ${formData.notifications?.sms ? 'text-green-500' : 'text-gray-400'}`}>
                            {formData.notifications?.sms ? '✓' : '✗'}
                          </span>
                          <span className="text-gray-700">SMS notifications</span>
                        </li>
                        <li className="flex items-center">
                          <span className={`mr-2 ${formData.notifications?.promotions ? 'text-green-500' : 'text-gray-400'}`}>
                            {formData.notifications?.promotions ? '✓' : '✗'}
                          </span>
                          <span className="text-gray-700">Promotional emails</span>
                        </li>
                      </ul>
                    </div>
                  )}

                  <h3 className="text-lg font-medium text-gray-900 mb-4">Account Type</h3>
                  {isEditing ? (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                      <div className="border-2 rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition-colors border-blue-500 bg-blue-50">
                        <input
                          type="radio"
                          id="personal"
                          name="accountType"
                          value="personal"
                          checked={formData.accountType === 'personal'}
                          onChange={(e) => setFormData({...formData, accountType: e.target.value})}
                          className="sr-only"
                        />
                        <label htmlFor="personal" className="cursor-pointer block">
                          <div className="font-medium text-gray-900 mb-1">Personal</div>
                          <div className="text-sm text-gray-500">For individual use</div>
                        </label>
                      </div>
                      
                      <div className="border-2 rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition-colors border-gray-200">
                        <input
                          type="radio"
                          id="business"
                          name="accountType"
                          value="business"
                          checked={formData.accountType === 'business'}
                          onChange={(e) => setFormData({...formData, accountType: e.target.value})}
                          className="sr-only"
                        />
                        <label htmlFor="business" className="cursor-pointer block">
                          <div className="font-medium text-gray-900 mb-1">Business</div>
                          <div className="text-sm text-gray-500">For company use</div>
                        </label>
                      </div>
                      
                      <div className="border-2 rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition-colors border-gray-200">
                        <input
                          type="radio"
                          id="education"
                          name="accountType"
                          value="education"
                          checked={formData.accountType === 'education'}
                          onChange={(e) => setFormData({...formData, accountType: e.target.value})}
                          className="sr-only"
                        />
                        <label htmlFor="education" className="cursor-pointer block">
                          <div className="font-medium text-gray-900 mb-1">Education</div>
                          <div className="text-sm text-gray-500">For students and teachers</div>
                        </label>
                      </div>
                    </div>
                  ) : (
                    <p className="py-2 mb-8 capitalize text-gray-800">{formData.accountType || 'Not set'}</p>
                  )}
                </div>
              </div>
              
              {isEditing && (
                <div className="mt-8">
                  <button
                    onClick={handleSave}
                    className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Save Changes
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}