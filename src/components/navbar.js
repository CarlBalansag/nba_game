import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Switch, Link, UNSAFE_DataRouterContext} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Maintenance from '../pages/Maintenance';
import Count from "../components/Count"

function Navbar(props) {


    return (
        <>
            
            <div className='navbar'>
                <nav className='bg-[#050614]'>
                    <div className="p-2 md:p-2 lg:p-2 xl:p-2 2xl:p-2 flex flex-nowrap items-center justify-between mx-auto">
                        <p className='text-sm sm:text-lg min-w-fit mr-6 sm:mr-8 sm:ml-10 text-[#f8fafc] text-xl'>NBA GAMES</p>
                        <div>
                        <ul className="p-2 mr-10 md:p-2 lg:p-2 xl:p-2 2xl:p-2 text-sm font-medium flex mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 sm:flex-row sm:space-x-8 sm:mt-0 sm:border-0  flex-row space-x-8 mt-0 border-0">
                            <li>
                            <Link to="/Live" className='navbar-clicks text-lg'>Live</Link>
                            </li>
                            <li>
                            <Link to="/PastSeason" className='navbar-clicks text-lg'>Past Season</Link>
                            </li>
                            <li>
                            <Link to="/Maintenance" className='navbar-clicks text-lg'>Teams</Link>
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



