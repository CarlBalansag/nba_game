import React, { Component } from "react";

const url = 'https://api-nba-v1.p.rapidapi.com/standings?league=standard&season=2022';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0aecbba164msh7f920f485034affp13bb34jsn2de9f4ab946f',
		'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
	}
};

let teams = []

async function getTeams(){
    try {
        const response = await fetch(url, options)
            .then(res => {
                return res.json()
            })
            .then(data => {
                data = data.response
                console.log(data)
            });


    } catch (error) {
        console.error(error);
    }


}

getTeams()

function Teams() {

    let teams = [];



    return (
        <div className="max-w-lg min-w-[60%] ml-10 w-10/12  sm:w-10/12 h-64 bg-purple-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 border border-gray-100">
            
        </div>
    )
};

export default Teams

