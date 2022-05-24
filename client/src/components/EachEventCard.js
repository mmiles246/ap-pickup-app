import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import {Modal, Button} from 'react-bootstrap'
import EditEventModal from './EditEventModal';

function EachEventCard ({eachEvent}) {
    const [eventToEdit, setEventToEdit]=useState(eachEvent)
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const navigate=useNavigate()

    function onClick (e) {
        console.log(e)
        setShow(true)
        navigate(`/my-organized-events/${eachEvent.id}`, {state: {eachEvent}})
    }

    return (
        <div>
            <h4>{eachEvent.name}</h4>
            <span>{eachEvent.location}</span>
            <br></br>
            <span>{new Date(eachEvent.start_time).toString()}</span>

            <br></br>
            <br></br>
        {/* <Link to=(`/my-event/${}`) eachEvent={eachEvent}>Edit Event?</Link> */}
        <button onClick={onClick}>Edit Event?</button>

        {show ? (<EditEventModal eventToEdit={eventToEdit} show={show} setShow={setShow} handleClose={handleClose} />)
            :
            <></>}

        </div>
    )

}

export default EachEventCard;