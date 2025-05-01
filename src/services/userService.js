import { openDB } from 'idb';

const initDB = async () => {
  return openDB('docapp', 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains('users')) {
        db.createObjectStore('users', { keyPath: 'email' });
      }
    },
  });
};

export const registerUser = async (userData) => {
  try {
    const db = await initDB();
    // Check if user already exists
    const existingUser = await db.get('users', userData.email);
    if (existingUser) {
      throw new Error('User already exists');
    }
    // Store user data
    await db.put('users', userData);
    return userData;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};

export const loginUser = async (email, password) => {
  try {
    const db = await initDB();
    const user = await db.get('users', email);
    if (!user || user.password !== password) {
      throw new Error('Invalid credentials');
    }
    // Store current user in localStorage
    localStorage.setItem('currentUser', JSON.stringify(user));
    return user;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

export const logoutUser = () => {
  localStorage.removeItem('currentUser');
};

export const getCurrentUser = () => {
  const userStr = localStorage.getItem('currentUser');
  return userStr ? JSON.parse(userStr) : null;
};

export const updateUserProfile = async (userData) => {
  try {
    const db = await initDB();
    await db.put('users', userData);
    // Update current user in localStorage
    localStorage.setItem('currentUser', JSON.stringify(userData));
    return userData;
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
}; 