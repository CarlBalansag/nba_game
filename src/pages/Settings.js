import React, { Component } from "react";
import Navbar from '../components/navbar';

function Settings(props) {

    const [darkMode, setDarkMode] = React.useState(true)


    return (
        <>
            <Navbar />    
            <p className="text-white">Settings</p>
        </>
    )
};

export default Settings

