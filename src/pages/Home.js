import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import { useNavigate } from 'react-router-dom';
import Maintenance from './Maintenance';
import Countdown from '../components/Countdown'
import Live from './Live';

function isDateBeforeToday(date) {
    return new Date(date.toDateString()) < new Date(new Date().toDateString());
}

export default function Home() {
    const navigate = useNavigate();

    return (
        <>
        {isDateBeforeToday(new Date(2016, 11, 16)) ? <Live /> : <Countdown />}
        </>
    );
}


