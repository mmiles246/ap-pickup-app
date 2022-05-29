import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import {Modal, Button} from 'react-bootstrap'
import AdminEditEventModal from './AdminEditEventModal';

function AllEventCards ({eachEvent}) {
    const [eventToEdit, setEventToEdit]=useState(eachEvent)
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const navigate=useNavigate()

    function onClick (e) {
        console.log(e)
        setShow(true)
        navigate(`/all-events/${eachEvent.id}`, {state: {eachEvent}})
    }


    // console.log(eachEvent)
    return (
        <div>
            <h4>{eachEvent.name}</h4>
            <span>{eachEvent.location}</span>
            <br></br>
            <span>{new Date(eachEvent.start_time).toString()}</span>

            <br></br>
            <br></br>
            <h5>Organized by: {eachEvent.organizer.first_name}</h5>
            <h6>Organizer ID: {eachEvent.organizer.id}</h6>
        {/* <Link to=(`/my-event/${}`) eachEvent={eachEvent}>Edit Event?</Link> */}
        <button onClick={onClick}>Edit Event?</button>

        {show ? (<AdminEditEventModal eventToEdit={eventToEdit} show={show} setShow={setShow} handleClose={handleClose} />)
            :
            <></>}

        </div>
    )

}

export default AllEventCards;