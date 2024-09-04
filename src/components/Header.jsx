import { FaMoon, FaSun } from "react-icons/fa6"

const Header = () =>{
    return(
        <div className="flex justify-between shadow-2xl px-6 py-8">
            <h1 className="font-bold">Where in the world?</h1>
            <button className="flex items-center">
                <FaMoon />
                <FaSun />
                <span>Dark Mode</span>
            </button>
        </div>
    )
}

export default Header