import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Switch, Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Maintenance from '../pages/Maintenance';
import Count from "../components/Count"

function Navbar() {

    function maintenance(e){
        navigate('maintenance')
    }

    const navigate = useNavigate();

    return (
        <>
            
            <div className='navbar'>
                <nav className="bg-[#050614] dark:bg-gray-900">
                    <div className="p-2 md:p-2 lg:p-2 xl:p-2 2xl:p-2 flex flex-nowrap items-center justify-between mx-auto">
                        <p className='text-sm sm:text-lg min-w-fit mr-6 sm:mr-8 sm:ml-10 text-[#f8fafc]'>NBA GAMES</p>
                        <div>
                        <ul className="p-2 md:p-2 lg:p-2 xl:p-2 2xl:p-2 text-sm font-medium flex mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 sm:flex-row sm:space-x-8 sm:mt-0 sm:border-0  flex-row space-x-8 mt-0 border-0">
                            <li>
                            <Link className='navbar-clicks aria-current="page"'>Home</Link>
                            </li>
                            <li>
                            <Link to="/Live" className='navbar-clicks'>Live</Link>
                            </li>
                            <li>
                            <Link to="/PastSeason" className='navbar-clicks'>Past Season</Link>
                            </li>
                            <li>
                            <Link to="/Maintenance" className='navbar-clicks'>Teams</Link>
                            </li>
                            <li>
                            <Link to="/Maintenance" className='navbar-clicks'>Setting</Link>
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



