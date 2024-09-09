import { useContext, useState } from "react";
import { FaM, FaMonero, FaMoon, FaSun } from "react-icons/fa6";
import { DarkMode, DarkModeContext } from "../context/modeContext";

const Header = () => {
  const [dark, setDark] = useState(false);
  const { darkMode, setDarkMode } = useContext(DarkMode);
  const changeMode = () => {
    setDarkMode(!darkMode);
    setDark(!dark);
    console.log(darkMode);
  };
  return (
    <div className={`${darkMode ? 'dark': ''}`}>
      <div className="flex justify-between shadow-2xl px-6 py-8 dark:bg-dark-color dark:text-white">
        <h1 className="font-bold">Where in the world?</h1>
        <button className="flex gap-2 items-center" onClick={changeMode}>
          {dark ? <FaMoon /> : <FaSun />}
          <span>{dark? 'Dark Mode': "Light Mode"}</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
