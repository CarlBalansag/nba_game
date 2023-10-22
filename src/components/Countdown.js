import React, { useState, useEffect } from 'react';
import Count from "./Count"; 
import Navbar from './navbar';
import { Link } from 'react-router-dom';

function Countdown() {
    return (
        <>
            <div className='pt-20 sm:pt-24 lg:pt-32 '>
                <h1 className='text-center text-[#f8fafc] text-2xl sm:text-3xl lg:text-4xl'>NBA season starts<span className="text-[#8000FF]"></span> October 24, 2023</h1>
                <Count />
                <div className='grid place-items-center pt-6'>
                <Link to="/PastSeason" className='navbar-clicks aria-current="page"'>
                    <button type="button" className="px-3 py-2 text-sm font-medium text-center inline-flex items-center text-white bg-[#8000FF] rounded-lg hover:bg-[#6008B8] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Past Season
                    </button>
                </Link>
                </div>
            </div>

        </>
    );
}

export default Countdown;
