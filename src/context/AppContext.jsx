import React, { createContext, useState } from "react";

// Create context
export const AppContext = createContext();

// Provider component
export const AppContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <AppContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </AppContext.Provider>
  );
};
