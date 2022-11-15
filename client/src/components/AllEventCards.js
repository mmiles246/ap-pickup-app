import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import {Modal, Button} from 'react-bootstrap'
import {Card} from 'react-bootstrap'
import AdminEditEventModal from './AdminEditEventModal';

function AllEventCards ({eachEvent, show, setShow}) {
    const [eventToEdit, setEventToEdit]=useState(eachEvent)
    
    // const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const navigate=useNavigate()

    function onClick (e) {
        console.log(e)
        setShow(true)
        navigate(`/all-events/${eachEvent.id}`, {state: {eachEvent}})
    }


    // console.log(eachEvent)
    return (
        <div className='all-event-card'>
            <Card className='all-event-card' style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{eachEvent.name}</Card.Title>
                    <Card.Subtitle>{eachEvent.type_of}</Card.Subtitle>
                    <Card.Text>
                    {eachEvent.location}
                    {new Date(eachEvent.start_time).toString()}
                    Number of RSVPs: {eachEvent.signups.length}
                    <br></br>
                    <h5>Organized by: {eachEvent.organizer.first_name}</h5>
                    <h6>Organizer ID: {eachEvent.organizer.id}</h6>
                    </Card.Text>
                    <button style={{width: '15rem'}} onClick={onClick}>Edit Event?</button>
                </Card.Body>
            </Card>

        {show ? (<AdminEditEventModal eventToEdit={eventToEdit} show={show} setShow={setShow} handleClose={handleClose} />)
            :
            <></>}

        </div>
    )

}

export default AllEventCards;