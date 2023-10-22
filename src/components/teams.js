import React, { Component } from "react";

const url = 'https://api-nba-v1.p.rapidapi.com/standings?league=standard&season=2022';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0aecbba164msh7f920f485034affp13bb34jsn2de9f4ab946f',
		'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
	}
};

async function getTeams(){
    try {
        const response = await fetch(url, options)
            .then(res => {
                return res.json()
            })
            .then(data => {
                data = data.response

                for (let i = 0; i <= 30; i++) {
                    console.log(data[i])
                }
            });


    } catch (error) {
        console.error(error);
    }


}

getTeams()


function Teams(props) {



    return (
        <div className="flex flex-col max-w-lg min-w-[60%] ml-10 w-10/12  sm:w-10/12 h-64 bg-purple-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 border border-gray-100">
            <div id="logo" className="h-48">
                <img className="w-40 mt-2 ml-32 sm:w-40 sm:mt-2 sm:mr-11" src="https://upload.wikimedia.org/wikipedia/fr/thumb/6/65/Celtics_de_Boston_logo.svg/1024px-Celtics_de_Boston_logo.svg.png" alt="NBA LOGO" />
            </div>
            <div id="info" className="h-20  grid grid-cols-2 gap-2">
                <div className="">
                    <p className="text-4xl text-emerald-500">72</p>
                </div>
                <div className="">
                    <p className="text-4xl text-rose-800">81</p>
                </div>
            </div>
        </div>
    )
};

export default Teams

//LOGO LINK "https://upload.wikimedia.org/wikipedia/fr/thumb/6/65/Celtics_de_Boston_logo.svg/1024px-Celtics_de_Boston_logo.svg.png"