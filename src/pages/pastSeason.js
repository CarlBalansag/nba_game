import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import Teams from '../components/teams';

function PastSeason() {
    return (
        <>
        <Navbar />
        <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 gap-y-10 lg:grid-cols-3 3xl:grid-cols-4'>
            <Teams />
            <Teams />
            <Teams />
            <Teams />
            <Teams />
        </div>
        </>
    );
}

export default PastSeason;
