import {Modal, Button} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'

function OrganizerEventModal ({show, handleClose}) {

    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                    Would you like to edit this event?
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>Must have an account to interact with the calendar.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" >
                    Login Here
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )

}

export default OrganizerEventModal;