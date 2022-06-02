import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import EachEventCard from './EachEventCard'
import {Modal} from 'react-bootstrap'
import EditEventModal from './EditEventModal'


function OrganizedEventsPage ({currentOrganizer}) {
    const [eventPageInfo, setEventPageInfo]=useState([])
    const [eventToEdit, setEventToEdit]=useState(undefined)
    const [stateToRerender, setStateToRerender]=useState(false)
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    useEffect(()=>{
        fetch('/town_event_page')
        .then(res=>res.json())
        .then((res)=> {
            console.log(res)
            setEventPageInfo(res.town_events)
            setStateToRerender(false)
        })
    }, [stateToRerender])
    console.log(eventPageInfo)

    return (
        <div className='organized-events-page'>
            <br></br>
            <h1>Your Upcoming events</h1>
            <div className='each-event-card'>
                {eventPageInfo.map((eachEvent)=>{
                    return(
                    <EachEventCard key={eachEvent.id} eachEvent={eachEvent} />
                    )
                })}
            </div>
            <EditEventModal show={show} setShow={setShow} handleClose={handleClose} eventToEdit={eventToEdit} setStateToRerender={setStateToRerender}/>

        </div>)
}

export default OrganizedEventsPage;