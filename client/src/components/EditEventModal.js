import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import {Modal, Button} from 'react-bootstrap'

function EditEventModal ({show, handleClose, eventToEdit}) {

    console.log(eventToEdit)

    function editEventClick (e) {
        console.log(e)
    }

    function deleteEventClick (e) {
        console.log(e)
        fetch('/delete_event', {
            method: 'DELETE',
            credentials: 'include'
        })
    }

    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {show ? (eventToEdit.name)
                        :
                        (<></>)}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>Would you like to Edit or Delete this event?</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                    Edit Event
                    </Button>
                    <Button variant="secondary" onClick={deleteEventClick}>
                    Delete
                    </Button>

                </Modal.Footer>
            </Modal>

        </div>
    )

}

export default EditEventModal; 