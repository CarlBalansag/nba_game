import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import { data } from 'autoprefixer';

let today = new Date();
let day = String(today.getDate()).padStart(2, '0');
let month = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let year = today.getFullYear();
let Tank0_current_date = `${year}${month}${day}`
console.log(Tank0_current_date)
let current_season_year = `${year}-${year+1}`

const url = `https://tank01-fantasy-stats.p.rapidapi.com/getNBAGamesForDate?gameDate=${Tank0_current_date}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0aecbba164msh7f920f485034affp13bb34jsn2de9f4ab946f',
		'X-RapidAPI-Host': 'tank01-fantasy-stats.p.rapidapi.com'
	}
};



function Live_visualize(props) {

// get teams informations to just get the ID then get to team statistics  set the teams statistic parameters. The team is the ID from teams information and the year as `${year}-${year+1}`


    return (
        <>
        <div className='ml-8 mr-8 grid grid-cols-2 gap-7'>
            <div className='flex flex-row justify-items-stretch bg-purple-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 border border-gray-100'>
                <div>
                    <img className="w-20 ml-10 mt-5 mb-5" src="https://media-4.api-sports.io/basketball/teams/157.png"/>
                </div>
                <div>
                    <p className='text-white ml-6 mt-12'>37-10</p>
                </div>
                <div>
                    <p className='text-white ml-28 mr-28 mt-12'> {props.teamOne} vs {props.teamTwo}</p>
                </div>
                <div>
                    <p className='text-white ml-6 mt-12'>37-10</p>
                </div>
                <div>
                    <img className="w-20 ml-10 mt-5 mb-5" src="https://media-4.api-sports.io/basketball/teams/157.png"/>
                </div>
            </div>

        </div>
        </>
    );
}

export default Live;

{/* 
?????????????? DIFFERENT ADD 2023 Statistics on pastseason page??????????????
Using Tank01 Fabtasy Stats API on rapid API, fetch for GET DAILY SCHEDULE WITH CURRENT DATA
    Figure out how to get dates in this format 20231119 {year}{month}{day} <--- Parameter for the fetch
For each result make a compnent for DailyGames. Make a dailyGames.js component
    From each object we need 
        HOME TEAM ID
        AWAY TEAM ID
        Get that id take it into API-BASKETBALL API and fetch [teams information] and the parameter is ID and season is going to be this year plus 1 [2023-2024]
            from this we get the team ID
        then FETCH teams statistics parameter is current data in {year}-{month}-{day} format and team ID from the last fetch we got season is going to be [2023-2024]
            from this we can go into 
            full team name = teams[name]
            logo = teams[logo]
            wins = games[wins]
            loss = games[loses]
*/}

function teamStatistics(ID){
    const url = `https://api-basketball.p.rapidapi.com/statistics?season=${current_season_year}&league=12&team=${ID}`;
    const options = {
	method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0aecbba164msh7f920f485034affp13bb34jsn2de9f4ab946f',
            'X-RapidAPI-Host': 'api-basketball.p.rapidapi.com'
        }
    };

    fetch(url, options)
    .then(res => res.json())
    .then(data => console.log(data.response))

}


function Live(){

    const [todaysGame, setTodaysGame] = useState();

    useEffect(() => {

        fetch(url, options)
        .then(res => res.json())
        .then(data => setTodaysGame(data.body))

    }, []);


    return(
        <>
        <Navbar />
        <div>
            {todaysGame?.map(item => {

                    return <Live_visualize teamOne={item.home} teamTwo={item.away}/> 
            })} 
        </div>
        </>
    )
};