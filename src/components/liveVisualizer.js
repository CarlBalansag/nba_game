function LiveVisualize(props) {

    // get teams informations to just get the ID then get to team statistics  set the teams statistic parameters. The team is the ID from teams information and the year as `${year}-${year+1}`
    
    
        return (
            <>
            <div className='flex flex-row rounded-md bg-opacity-10 bg-purple-100 border'>
                    <img className="w-20 ml-10 mt-5 mb-5" src={props.homeImg}/>
                    <p className=' text-white ml-14 mr-14 mt-12'> {props.teamHome} vs {props.teamAway}</p>
                    <img className="w-20 mt-5 mb-5 mr-10" src={props.awayImg}/>
            </div>
            </>
        );
    }

export default LiveVisualize