import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import {Modal, Button} from 'react-bootstrap'
import {Card} from 'react-bootstrap'
import AdminEditEventModal from './AdminEditEventModal';

function AllEventCards ({event}) {
    const [eventToEdit, setEventToEdit]=useState(event)
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const navigate=useNavigate()

    function onClick (e) {
        console.log(event)
        setShow(true)
        navigate(`/all-events/${event.id}`, {state: {event}})
    }


    // console.log(eachEvent)
    return (
        <div className='all-event-card'>
            <Card className='all-event-card' style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{event.name}</Card.Title>
                    <Card.Subtitle>{event.type_of}</Card.Subtitle>
                    <Card.Text>
                    {event.location}
                    {new Date(event.start_time).toString()}
                    Number of RSVPs: {event.signups.length}
                    <br></br>
                    <h5>Organized by: {event.organizer.first_name}</h5>
                    <h6>Organizer ID: {event.organizer.id}</h6>
                    </Card.Text>
                    <button style={{width: '15rem'}} onClick={onClick}>Edit Event?</button>
                </Card.Body>
            </Card>

        {show ? (<AdminEditEventModal eventToEdit={event} show={show} setShow={setShow} handleClose={handleClose} />)
            :
            <></>}

        </div>
    )

}

export default AllEventCards;