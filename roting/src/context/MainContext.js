import { createContext, useContext, useEffect, useState } from "react";
// import axios from "axios";

const MainContext = createContext();

const MainContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);



  const values = {
    theme,
    setTheme,
  };

  return (
    <MainContext.Provider value={values}>
      {children}
    </MainContext.Provider>
  );
};

const useMainContext = () => useContext(MainContext);

export { useMainContext, MainContextProvider };