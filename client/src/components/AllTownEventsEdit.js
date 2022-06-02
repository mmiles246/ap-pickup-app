import AllEventCards from './AllEventCards'
import {useLocation} from 'react-router-dom'
import {useState, useEffect} from 'react'

function AllTownEventsEdit ({currentOrganizer}) {
    const [allEvents, setAllEvents]=useState([])


    useEffect(()=>{
        fetch('/town_events')
        .then(res=>res.json())
        .then((res)=> {
            console.log(res)
            setAllEvents(res)
        })
    }, [])
   
    function eventsMapper (eachEvent) {
        return <AllEventCards key={eachEvent.id} eachEvent={eachEvent} />
    }

    return (
        <div className='organized-events-page'> 
            <div className='all-event-card'>
                <h1>All Upcoming Events</h1>
                {allEvents.map(eventsMapper)}
            </div>  
        </div>)

}

export default AllTownEventsEdit;