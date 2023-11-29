import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import Teams from '../components/teams';
import { a, Modal } from 'flowbite-react';
import data from "../data/pastSeason.json"


const url = 'https://api-nba-v1.p.rapidapi.com/standings?league=standard&season=2022';
const options = {
method: 'GET',
headers: {
    'X-RapidAPI-Key': '0aecbba164msh7f920f485034affp13bb34jsn2de9f4ab946f',
    'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
}
};

function DefaultModal(props) {
    const [openModal, setOpenModal] = useState();
    const open = { openModal, setOpenModal };
    const [currentTeam, setCurrentTeam] = useState();

    
    

return ( 
    
<>

    <a className="bg-red cursor-pointer ml-5" onClick={() => open.setOpenModal('default')}>
        {props.teams}
    </a>


    <Modal show={open.openModal === 'default'} onClose={() => open.setOpenModal(undefined)}>

    <Modal.Header className=''>{props.name}</Modal.Header>
    <Modal.Body className=''>
        <div className="space-y-6">
        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            <div class="grid grid-cols-3">
                <div className=''>
                <img src={props.teamLogo} alt={props.name} className='w-6/12 ml-11'/>
                </div>

                <div className=' col-span-2'>
                    <div id="model_content_stats" className="grid grid-cols-6 gap-4 pl-16">
                    <div class="col-start-2 col-span-4">
                        <p className='ml-6'>2023 Team Statistics</p>
                    </div>
                    <div class="col-start-1 col-end-3">
                        <p>Wins: {props.win}</p>
                    </div>
                    <div class="col-end-7 col-span-2">
                        <p>Loss: {props.loss}</p>
                    </div>
                    <div class="col-start-1 col-end-7">
                        <p></p>
                    </div>
                    </div>
                </div>

                <div className='bg-yellow-500 col-span-3'>Players

                </div>
            </div>
        </p>
        </div>
    </Modal.Body>
    <Modal.Footer className=''>

    </Modal.Footer>
    </Modal>


</>
)

}

function PastSeason() {

    const [stats, setStats] = useState([]);

    useEffect(() => {
        

        fetch(url, options)
        .then(res => res.json())
        .then(data => setStats(data.response))
            .catch(err => console.log(err.message));
        
    }, [1])

    


    return (
        <>
            <Navbar />
            { <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 gap-y-10 lg:grid-cols-3 3xl:grid-cols-4'>
                {stats?.map(item => {
                    return <DefaultModal name={item.team.name} teamLogo={item.team.logo} win={item.win.total} loss={item.loss.total} teams={<Teams key={item.team.name} name={item.team.name} img={item.team.logo} win={item.win.total} loss={item.loss.total} />}/> 
                })} 
            </div> }
        </>
    );
}

export default PastSeason;
