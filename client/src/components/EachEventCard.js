import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import {Modal, Button} from 'react-bootstrap'
import EditEventModal from './EditEventModal';
import {Card} from 'react-bootstrap'

function EachEventCard ({eachEvent}) {
    const [eventToEdit, setEventToEdit]=useState(eachEvent)
    
    const [show, setShow] = useState(false);

    const navigate=useNavigate()

    console.log(eachEvent)
    
    // const handleClose = () => setShow(false);

    function handleClose (e) {
        setShow(false)
        navigate('/my-organized-events')
    }



    function onClick (e) {
        console.log(e)
        setShow(true)
        navigate(`/my-organized-events/${eachEvent.id}`, {state: {eachEvent}})
    }

    return (
        <div className='event-card'>
            <Card className='event-card' style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{eachEvent.name}</Card.Title>
                    <Card.Subtitle>{eachEvent.type_of}</Card.Subtitle>
                    <Card.Text>
                    {eachEvent.location}
                    {new Date(eachEvent.start_time).toString()}
                    Number of RSVPs: {eachEvent.signups.length}
                    </Card.Text>
                    <button style={{width: '15rem'}} onClick={onClick}>Edit Event?</button>
                </Card.Body>
            </Card>

        {show ? (<EditEventModal eventToEdit={eventToEdit} show={show} setShow={setShow} handleClose={handleClose} />)
            :
            <></>}

        </div>
    )

}

export default EachEventCard;