import AllEventCards from './AllEventCards'
import {useLocation} from 'react-router-dom'
import {useState, useEffect} from 'react'

function AllTownEventsEdit ({currentOrganizer}) {
    const [allEvents, setAllEvents]=useState([])
    const [show, setShow] = useState(false);
    const [dummyState, setDummyState]= useState(null)
    const editEvent = useLocation()

    console.log(editEvent)
    // console.log(editEvent.state)

    useEffect(()=>{
        fetch('/town_events')
        .then(res=>res.json())
        .then((res)=> {
            console.log(res)
            setAllEvents(res)
        })
    }, [])
   
    function eventsMapper (eachEvent) {
        return <AllEventCards key={eachEvent.id} eachEvent={eachEvent} show={show} setShow={setShow} />
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