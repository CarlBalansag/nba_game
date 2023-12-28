import React, { Component } from "react";

function Teams(props) {

    console.log("Printing Teams Function")



    return (
        <div className="flex flex-col max-w-lg min-w-[60%] ml-10 w-10/12  sm:w-10/12 h-64 bg-purple-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 border border-gray-100">
            
            <div id="logo" className="">
                <p className="text-white text-lg pl-36 sm:pl-20 md:ml-16 xl:pl-24 2xl:ml-7 mt-4">{props.name}</p>
                <img className="w-28 mt-2 ml-32 sm:ml-16 md:ml-32 xl:ml-32 2xl:ml-32 sm:w-28 sm:mt-2 sm:mr-11 " src={props.img} alt="NBA LOGO" />
            </div>
            <div id="info" className="h-20 grid grid-cols-2 gap-2">
                <div className="">
                    <p className="pl-24 sm:pl-12 md:pl-20 xl:pl-24 text-emerald-500">Wins</p>
                    <p className="pl-24 sm:pl-12 md:pl-20 xl:pl-24 text-3xl text-emerald-500">{props.win}</p>
                </div>
                <div className="">
                    <p className="pl-16 sm:pl-8 md:pl-16 xl:pl-16 text-rose-800">Loss</p>
                    <p className="pl-16 sm:pl-8 md:pl-16 xl:pl-16 text-3xl text-rose-800">{props.loss}</p>
                </div>
            </div>
            
        </div>
    )
};

export default Teams

//LOGO LINK "https://upload.wikimedia.org/wikipedia/fr/thumb/6/65/Celtics_de_Boston_logo.svg/1024px-Celtics_de_Boston_logo.svg.png"