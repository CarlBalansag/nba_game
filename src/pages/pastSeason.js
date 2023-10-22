import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import Teams from '../components/teams';


const url = 'https://api-nba-v1.p.rapidapi.com/standings?league=standard&season=2022';
const options = {
method: 'GET',
headers: {
    'X-RapidAPI-Key': '0aecbba164msh7f920f485034affp13bb34jsn2de9f4ab946f',
    'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
}
};

function PastSeason() {

    const [stats, setStats] = useState([]);

    useEffect(() => {
        

        fetch(url, options)
        .then(res => res.json())
        .then(data => setStats(data.response))
            .catch(err => console.log(err.message));
        
    }, [])


    return (
        <>
        <Navbar />
        <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 gap-y-10 lg:grid-cols-3 3xl:grid-cols-4'>
            {stats?.map(item => {
                return <Teams name={item.team.name} img={item.team.logo} win={item.win.total} loss={item.loss.total} />
            })}
        </div>
        </>
    );
}

export default PastSeason;

// name img win loss