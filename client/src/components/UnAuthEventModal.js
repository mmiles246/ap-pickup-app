import { useState } from 'react';
import {Modal, Button} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'

function UnAuthEventModal ({show, handleClose}) {

    const navigate= useNavigate()

    function handleClick (e) {
        console.log(e)
        navigate('/login')
    }

    return (
        <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              Please sign in.
              </Modal.Title>
          </Modal.Header>
          <Modal.Body>Must have an account to interact with the calendar.</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClick}>
              Login Here
            </Button>
            </Modal.Footer>
        </Modal>
    </div>
    )

}

export default UnAuthEventModal; 