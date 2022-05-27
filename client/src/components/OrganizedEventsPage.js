import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import EachEventCard from './EachEventCard'
import {Modal} from 'react-bootstrap'
import EditEventModal from './EditEventModal'


function OrganizedEventsPage ({currentOrganizer}) {
    const [eventPageInfo, setEventPageInfo]=useState([])
    const [eventToEdit, setEventToEdit]=useState(undefined)
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    useEffect(()=>{
        fetch('/town_event_page')
        .then(res=>res.json())
        .then((res)=> {
            console.log(res)
            setEventPageInfo(res.town_events)
        })
    }, [])
    console.log(eventPageInfo)

    return (
        <>

            {eventPageInfo.map((eachEvent)=>{
                return(
                <EachEventCard  key={eachEvent.id} eachEvent={eachEvent} />
                )
            })}
            <EditEventModal show={show} handleClose={handleClose} eventToEdit={eventToEdit}/>

        </>)
}

export default OrganizedEventsPage;