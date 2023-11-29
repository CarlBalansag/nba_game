import React, { Component } from "react";

function Teams(props) {



    return (
        <div className="flex flex-col h-64 bg-purple-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 border border-gray-100">
            <div id="content" className=" ml-10">
                <div id="logo" className="h-44">
                    <p className="text-white text-lg pl-[140px] mt-1">{props.name}</p>
                    <img className="w-32 mt-2 ml-32 sm:w-36 sm:mt-2 sm:mr-11" src={props.img} alt="NBA LOGO" />
                </div>
                <div id="info" className="h-20  grid grid-cols-2 gap-2">
                    <div className="">
                        <p className="pl-24 text-emerald-500">Wins</p>
                        <p className="pl-24 text-3xl text-emerald-500">{props.win}</p>
                    </div>
                    <div className="">
                        <p className="pl-16 text-rose-800">Loss</p>
                        <p className="pl-16 text-3xl text-rose-800">{props.loss}</p>
                    </div>
            </div>
            </div>
        </div>
    )
};

export default Teams

// Fix title needs to be on the left more 
//Make logo smaller
//some logos are loading in so like pistons figure that out 
//some logos are to far high like rockets and spurs
//some logos are to big like the kings or the nets 