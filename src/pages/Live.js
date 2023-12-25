import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import { data } from 'autoprefixer';
import NoLiveGamesToday from '../components/noLiveGames';
import LiveVisualize from '../components/liveVisualizer';

let today = new Date();
let day = String(today.getDate()).padStart(2, '0');
    day = Number(day)
let month = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let year = today.getFullYear();
let Current_date = `${year}${month}${day}`
let date = `${year}-${month}-${day +1}`
console.log(Current_date)
let current_season_year = `${year}-${year+1}`

const APIBasketballOption = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0aecbba164msh7f920f485034affp13bb34jsn2de9f4ab946f',
		'X-RapidAPI-Host': 'api-basketball.p.rapidapi.com'
	}
};

function Live(){
    console.log(`Current season year = ${current_season_year}`)
    console.log(`Date = ${date}`)
    const url_schedule = `https://api-basketball.p.rapidapi.com/games?season=${current_season_year}&league=12&date=${date}`
    const [todaysGame, setTodaysGame] = useState();
    const [homeTeamStats, setHomeTeamStats] = useState();
    const [awayTeamStats, setAwayTeamStats] = useState();


    useEffect(() => {
        console.log("Getting all Live Games today")
        fetch(url_schedule, APIBasketballOption)
            .then(res => res.json())
            // .then(data => console.log(data.response))
            .then(data => setTodaysGame(data.response))
    },[]);

    const gamesToday = todaysGame === undefined
    console.log(gamesToday)
    console.log(todaysGame)

    return(
        <>
        <Navbar />
            <p className='
                text-white pb-10 flex justify-center text-3xl'
            >Games Today {month}-{day}-{year}</p>
        {
            gamesToday 
            ? 
                <NoLiveGamesToday />
            :
                <div className='grid grid-cols-1 gap-y-4
                sm:grid sm:grid-cols-1 sm:gap-y-4
                md:grid md:grid-cols-1 md:gap-y-4
                lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-4
                xl:grid xl:grid-cols-3 xl:gap-x-8 xl:gap-y-4'>
                
                {todaysGame?.map(item => {
                    return <LiveVisualize key={item.teams.home.name} teamHome={item.teams.home.name} teamAway={item.teams.away.name} homeImg={item.teams.home.logo} awayImg={item.teams.away.logo}/>
                })}
                </div>
        }
        </>
    )
};

export default Live;