import React, { createContext, useState, useContext, useEffect } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [activityFavorites, setActivityFavorites] = useState(() => {
    // Initialize state from local storage
    const storedFavorites = localStorage.getItem("activityFavorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  // Save to local storage whenever activityFavorites changes
  useEffect(() => {
    localStorage.setItem("activityFavorites", JSON.stringify(activityFavorites));
  }, [activityFavorites]);

  const toggleFavorite = (activity) => {
    setActivityFavorites((prev) => {
      const isFavorited = prev.find((fav) => fav._id === activity._id);
      if (isFavorited) {
        // Remove from favorites
        return prev.filter((fav) => fav._id !== activity._id);
      } else {
        // Add to favorites
        return [...prev, activity];
      }
    });
  };

  return (
    <AppContext.Provider value={{ activityFavorites, toggleFavorite }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

