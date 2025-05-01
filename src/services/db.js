const DB_NAME = 'doctorAppointmentDB';
const DB_VERSION = 1;
const STORE_NAME = 'appointments';

export const initDB = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = () => {
      reject('Error opening database');
    };

    request.onsuccess = (event) => {
      resolve(event.target.result);
    };

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        const store = db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
        store.createIndex('doctorId', 'doctorId', { unique: false });
        store.createIndex('date', 'date', { unique: false });
      }
    };
  });
};

export const saveAppointment = async (appointmentData) => {
  const db = await initDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([STORE_NAME], 'readwrite');
    const store = transaction.objectStore(STORE_NAME);
    const request = store.add({
      ...appointmentData,
      createdAt: new Date().toISOString(),
      status: 'pending'
    });

    request.onsuccess = () => {
      resolve(request.result);
    };

    request.onerror = () => {
      reject('Error saving appointment');
    };
  });
};

export const getAppointments = async () => {
  const db = await initDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([STORE_NAME], 'readonly');
    const store = transaction.objectStore(STORE_NAME);
    const request = store.getAll();

    request.onsuccess = () => {
      resolve(request.result);
    };

    request.onerror = () => {
      reject('Error getting appointments');
    };
  });
};

export const getAppointmentsByDoctor = async (doctorId) => {
  const db = await initDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([STORE_NAME], 'readonly');
    const store = transaction.objectStore(STORE_NAME);
    const index = store.index('doctorId');
    const request = index.getAll(doctorId);

    request.onsuccess = () => {
      resolve(request.result);
    };

    request.onerror = () => {
      reject('Error getting appointments');
    };
  });
};

export const deleteAppointment = async (appointmentId) => {
  try {
    const db = await initDB();
    await db.delete('appointments', appointmentId);
    return true;
  } catch (error) {
    console.error('Error deleting appointment:', error);
    throw error;
  }
}; 