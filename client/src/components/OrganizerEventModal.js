import {Modal, Button, ModalBody} from 'react-bootstrap'
import {renderMatches, useNavigate} from 'react-router-dom'
import {useEffect, useState} from 'react'
import MoreInfoPage from './MoreInfoPage'

function OrganizerEventModal ({show, handleClose, selectedEvent, currentOrganizer}) {
    const [whosEvent, setWhosEvent]=useState(false)

    const navigate=useNavigate()

    function seeEventInfoClick (e) {
      navigate(`/more-info/${selectedEvent.id}`, {state: {
        event: selectedEvent,
        currentUser: currentOrganizer,
      }})
    }

    useEffect(()=>{
        if (selectedEvent.organizer.id === currentOrganizer.id) {
            setWhosEvent(true)
        } 
    }, [])


        let modalBody; 
        if (whosEvent) {
            modalBody = <Modal.Body>Would you like to edit this event's details?</Modal.Body>
        } else if (!whosEvent&&currentOrganizer.admin) {
            modalBody= <Modal.Body>Admin status allows you to edit another organizers event.</Modal.Body>
        }

        let modalBttn;
        if (!whosEvent&&currentOrganizer.admin) {
            modalBttn=<Button variant='secondary'>Edit Event</Button>
        } else if (whosEvent) {
            modalBttn=<Button variant='secondary'>Edit Event</Button>
        } else {
            modalBttn=<Button onClick={seeEventInfoClick} variant='secondary'>See event details.</Button>
        }
    
    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                    {whosEvent ? ('This is your event.') : ('This is another organizers event.')}
                    </Modal.Title>
                </Modal.Header>
                {modalBody}
                {/* <Modal.Body>
                </Modal.Body> */}
                <Modal.Footer>
                    {modalBttn}
                    {/* <Button variant="secondary" >
                    Login Here
                    </Button> */}
                </Modal.Footer>
            </Modal>
        </div>
    )

}

export default OrganizerEventModal;