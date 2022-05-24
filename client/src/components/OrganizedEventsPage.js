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

    console.log(currentOrganizer)

    useEffect(()=>{
        fetch('/town_event_page')
        .then(res=>res.json())
        .then((res)=> {
            console.log(res)
            setEventPageInfo(res.town_events)
        })
    }, [])
    console.log(eventPageInfo)


    // function townEventsMapper (townEvent) {
    //     return (<span>{townEvent}</span>)
    // }

    return (
        <>

            {eventPageInfo.map((eachEvent)=>{
                return(
                <EachEventCard  key={eachEvent.id} eachEvent={eachEvent} />
                )
            })}
            <EditEventModal show={show} handleClose={handleClose} eventToEdit={eventToEdit}/>

        </>)
        // currentOrganizer ? 
        // (<div>
        //     filteredEvents.map((eachEvent)=> {
        //         (<h3>{eachEvent}</h3>)
        //     })

        // </div>)
        // :
        // (<div></div>)
    

}

export default OrganizedEventsPage;