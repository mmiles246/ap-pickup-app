import { useState } from 'react';
import { useNavigate, useLocation, Link, Navigate } from 'react-router-dom';


import {Modal, Button} from 'react-bootstrap'


function EventModal ({selectedEvent, show, setShow, handleClose, handleShow, eventInfoToPass, currentUser, currentOrganizer, setStateToRerender}) {
    // const [eventWithId, setEventWithId]=useState({})
    // console.log(eventInfoToPass)

    const navigate = useNavigate()
    const location = useLocation()


    const eventArray = []

    // console.log(selectedEvent)

    eventInfoToPass.forEach(town_event => {
      if (town_event.id === selectedEvent.id) {
        eventArray.push(town_event)
      } 
    });
    
    // console.log(eventArray[0].signups)

    const townEventSignups=eventArray[0].signups
    // console.log(townEventSignups)

      const handleRsvp =[0]
    const eventSignups = [{
      id:1,
      user_id: 1, 
      town_event_id: eventArray[0].id 
    }]
    // console.log(eventSignups)
    // console.log(eventArray[0].signups)
    const signupsArray = eventArray[0].signups
    signupsArray.map((eachSignup)=> {
      handleRsvp.push(eachSignup.user_id)
    })

    // console.log(eventSignups)
    townEventSignups.forEach(signup => {
      if (signup.user_id === currentUser.id) {
        handleRsvp.push(signup.user_id)
      } else {}
    })
    // console.log(selectedEvent)
    // console.log(handleRsvp.includes(currentUser.id))

console.log(handleRsvp)


    function handleRsvpClick (e) {
      console.log(e)
      fetch('/event_rsvp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user_id: currentUser.id,
          town_event_id: eventArray[0].id
        })
      })
      alert("Succsessfully RSVP'd!")
      setStateToRerender(true)
      setShow(false)
      // navigate('/upcoming')
    }

    function handleInfoClick (e) {
      navigate(`/more-info/${selectedEvent.id}`, {state: {
        event: selectedEvent,
        currentUser: currentUser,
      }})
    }

    function handleCancelRsvpClick (e) {
      console.log(e)
      fetch(`/event_rsvp/${selectedEvent.id}`, {
        method: 'DELETE'
      })
      handleRsvp.pop()
      alert("Succsessfully canceled RSVP")
      setStateToRerender(true)
      setShow(false)
      navigate('/upcoming')
    }


    return (
      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              {selectedEvent.title}
              </Modal.Title>
          </Modal.Header>
          <Modal.Body>{eventArray[0].event_description}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleInfoClick}>
              See more info here!
            </Button>
            {
               handleRsvp.includes(currentUser.id)
               ?
                (<Button variant="primary" onClick={handleCancelRsvpClick}>cancel RSVP</Button>)
              :
                (<Button variant="primary" onClick={handleRsvpClick}>RSVP </Button>)
            }


          </Modal.Footer>
        </Modal>
    </div>
    );
    }

export default EventModal;
