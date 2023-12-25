import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Switch, Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Maintenance from '../pages/Maintenance';
import Count from "../components/Count"

function Navbar(props) {

    const darkIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>`
    const lightIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>`

    const [DarkMode, setDarkMode] = useState(true)

    localStorage.setItem('isDarkmode', DarkMode)
    console.log(localStorage)



    function toggleTheme(){
        console.log("clicked light or dark mode")
        setDarkMode(!DarkMode);
        localStorage.setItem('isDarkmode', DarkMode)
    }

    return (
        <>
            
            <div className='navbar'>
                <nav className="bg-[#050614] dark:bg-gray-900">
                    <div className="p-2 md:p-2 lg:p-2 xl:p-2 2xl:p-2 flex flex-nowrap items-center justify-between mx-auto">
                        <p className='text-sm sm:text-lg min-w-fit mr-6 sm:mr-8 sm:ml-10 text-[#f8fafc] text-xl'>NBA GAMES</p>
                        <div>
                        <ul className="p-2 mr-10 md:p-2 lg:p-2 xl:p-2 2xl:p-2 text-sm font-medium flex mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 sm:flex-row sm:space-x-8 sm:mt-0 sm:border-0  flex-row space-x-8 mt-0 border-0">
                            <li>
                            <Link className='navbar-clicks aria-current="page" text-lg'>Home</Link>
                            </li>
                            <li>
                            <Link to="/Live" className='navbar-clicks text-lg'>Live</Link>
                            </li>
                            <li>
                            <Link to="/PastSeason" className='navbar-clicks text-lg'>Past Season</Link>
                            </li>
                            <li>
                            <Link to="/Maintenance" className='navbar-clicks text-lg'>Teams</Link>
                            </li>
                            <li>
                                <button className="w-20 h-10 rounded-full bg-white flex items-center transition duration-300 focus:outline-none shadow" onClick={toggleTheme}>;
                                    <div
                                        id="switch-toggle"
                                        className= {DarkMode ? 'bg-yellow-500 -translate-x-2 w-12 h-12 relative rounded-full transition duration-500 transform p-1 text-white':' bg-gray-700 translate-x-full w-12 h-12 relative rounded-full transition duration-500 transform p-1 text-white'} >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                    </div>
                                </button>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}



export default Navbar;



