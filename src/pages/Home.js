import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import { useNavigate } from 'react-router-dom';
import Maintenance from './Maintenance';
import Countdown from '../components/Countdown'
import Live from './Live';

const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let currentDate = `${month}/${day}/${year}`;
console.log(currentDate)
const seasonStart = '9/24/2023'

let time = true
if (currentDate === seasonStart) {
    time = true
} else {
    time = false
}

console.log(time)

export default function Home() {
    const navigate = useNavigate();

    return (
        <>
        {time ? <Countdown /> : <Live />}
        </>
    );
}


