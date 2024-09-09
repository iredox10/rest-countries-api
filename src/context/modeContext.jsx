import { createContext, useEffect, useState } from "react";

export const DarkMode = createContext();

export const DarkModeContext = ({ children, state }) => {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const modeStatus = localStorage.getItem("darkMode");
    if (!modeStatus) {
      localStorage.setItem("darkMode", darkMode);
      console.log(darkMode)
    }
      setDarkMode(JSON.parse(modeStatus));
      console.log(darkMode)
      localStorage.setItem('darkMode', darkMode)
  }, []);

  useEffect(() =>{
    localStorage.setItem('darkMode',darkMode)
  },[darkMode])

  return <DarkMode.Provider value={{setDarkMode,darkMode}}>{children}</DarkMode.Provider>;
};
