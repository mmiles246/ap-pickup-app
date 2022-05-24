import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {Modal, Button} from 'react-bootstrap'


function EventModal ({selectedEvent, show, setShow, handleClose, handleShow, eventInfoToPass, currentUser, currentOrganizer}) {
    const [eventWithId, setEventWithId]=useState({})
    // console.log(eventInfoToPass)

    const navigate = useNavigate()
    const location = useLocation()

    const eventArray = []

    console.log()

    eventInfoToPass.forEach(town_event => {
      if (town_event.name === selectedEvent.title) {
        eventArray.push(town_event)
      } 
    });
    console.log(eventArray)
    console.log(eventArray[0].signups)


      const handleRsvp =[0]
    const eventSignups = [{
      id:1000,
      user_id: 1, 
      town_event_id: eventArray[0].id 
    }]
    // console.log(eventSignups)
    // console.log(eventArray[0].signups)
    const signupsArray = eventArray[0].signups
    signupsArray.map((eachSignup)=> {
      handleRsvp.push(eachSignup.user_id)
    })


  //  eventSignups.push(eventArray[0].signups[0])

    // console.log(eventSignups)
    eventSignups.forEach(signup => {
      if (signup.user_id === currentUser.id) {
        handleRsvp.push(signup.user_id)
      } 
    })
    console.log(selectedEvent)
    // console.log(handleRsvp.includes(currentUser.id))




    function handleRsvpClick (e) {
      console.log(e)
      fetch('./event_rsvp', {
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
    }

    function handleInfoClick (e) {
      console.log(e)
      navigate('/upcoming/more-info', {state:{...eventArray[0]}})
    }

    function handleCancelRsvpClick (e) {
      console.log(e)
      fetch(`/event_rsvp`, {
        method: 'DELETE'
      })
    }

    // {
    //   if (currentUser.signup.town_event_id === eventArray[0].id) {
    //     <Button variant="primary" onClick={handleRsvpClick}>change RSVP</Button>
    //   } else {
    //     <Button variant="primary" onClick={handleRsvpClick}>RSVP </Button>
    //   }
    // }


    return (
      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              {selectedEvent.title}
              </Modal.Title>
          </Modal.Header>
          <Modal.Body>Would you like to RSVP for this event?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleInfoClick}>
              See more info here!
            </Button>
            
            {
               handleRsvp.includes(currentUser.id)
              // (currentUser && currentUser.id === handleRsvp[1].user_id) 
              // (eventSignups[0].user_id&& === currentUser.id)
               ?
                (<Button variant="primary" onClick={handleCancelRsvpClick}>cancel RSVP</Button>)
              :
                (<Button variant="primary" onClick={handleRsvpClick}>RSVP </Button>)
              
            }
            {/* <Button variant="primary" onClick={handleRsvpClick}>
              RSVP
            </Button> */}
          </Modal.Footer>
        </Modal>
    </div>
    );
    }

export default EventModal;