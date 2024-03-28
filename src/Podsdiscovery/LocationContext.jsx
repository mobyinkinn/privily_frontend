// LocationContext.js
import React, { createContext, useContext, useState } from "react";

const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const setLocation = (location) => {
    setSelectedLocation(location);
  };

  return (
    <LocationContext.Provider value={{ selectedLocation, setLocation }}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocationContext = () => {
  return useContext(LocationContext);
};
