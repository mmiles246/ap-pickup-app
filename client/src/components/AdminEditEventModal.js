import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import {Modal, Button} from 'react-bootstrap'
import DatePicker from "react-datepicker";

function AdminEditEventModal ({eventToEdit, show, setShow, handleClose}) {

    // const [selectedEvent, setSelectedEvent] = useState(undefined);
    // const [show, setShow] = useState(false);
    const [editEventShow, setEditEventShow]=useState(false)
    const [updatedEvent, setUpdatedEvent]=useState({
        name: "",
        type_of: "",
        start_time: new Date(),
        end_time: new Date(), 
        location: ""
    })

    const navigate=useNavigate()
    
    function handleClose (e) {
        setShow(false)
        navigate('/all-events')
    }

    // function handleShow (e) {

    //     setSelectedEvent(e)
    //     setShow(true)
    //     // console.log(selectedEvent.id)
    //     navigate(`/all-events/${selectedEvent.id}`)
    // }

    function editEventClick (e) {
        console.log(e)
        setEditEventShow(true)
    }

    function deleteEventClick (e) {
        console.log(e)
        fetch(`/my_event/${eventToEdit.id}`, {
            method: 'DELETE',
            credentials: 'include'
        })
    }

    function handleInputChange (e) {
        const {name, value}=e.target;

        setUpdatedEvent({
            ...updatedEvent,
            [name]: value
        });
    }

    function handleSubmit (e) {
        e.preventDefault()
        fetch(`/organize_event/${eventToEdit.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: updatedEvent.name,
                type_of: updatedEvent.type_of,
                start_time: updatedEvent.start_time,
                end_time: updatedEvent.end_time,
                location: updatedEvent.location,
                event_description: updatedEvent.event_description,
                sponsors: updatedEvent.sponsors
                // organizer_id: currentOrganizer.id
            })
        })
        .then(res=> {
            if (res.ok) {
                res.json()
            } else {
                res.json().then(errors=> {
                    console.error(errors)
                })
            }
        })
    }


    
    return(
        <div>
            <Modal show={show} onHide={handleClose}  >
                <Modal.Header closeButton>
                    <Modal.Title>
                        {show ? (eventToEdit.name)
                        :
                        (<></>)}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>Would you like to Edit or Delete this event?</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={editEventClick}>
                    Edit Event
                    </Button>
                    <Button variant="secondary" onClick={deleteEventClick}>
                    Delete
                    </Button>
                </Modal.Footer>

            {editEventShow ? 
                    
                (<form onSubmit={handleSubmit}>
                    <input
                    type='text'
                    placeholder='Name of Event'
                    value={updatedEvent.name}
                    name='name'
                    onChange={handleInputChange}
                    >
                    </input>

                    <label htmlFor='type_of'>Type Of Event: </label>
                    <select
                    type='select'
                    placeholder='Type of Event'
                    value={updatedEvent.type_of}
                    name='type_of'
                    onChange={handleInputChange}
                    >
                        <option value='volunteer'>Volunteer</option>
                        <option value='sports'>Sports</option>
                        <option value='arts'>Arts</option>
                        <option value='social'>Social</option>
                    </select>
                    
                    <DatePicker placeholderText='Start Time' showTimeSelect selected={updatedEvent.start_time} onChange={(start_time)=> setUpdatedEvent({...updatedEvent, start_time})} />

                    <DatePicker placeholderText='End Time' showTimeSelect selected={updatedEvent.end_time} onChange={(end_time)=> setUpdatedEvent({...updatedEvent, end_time})} />

                    <input
                    type='text'
                    placeholder='Location of Event'
                    value={updatedEvent.location}
                    name='location'
                    onChange={handleInputChange}
                    >
                    </input>

                    <br></br>
                    <br></br>

                    <textarea
                    type='textinput'
                    placeholder='Event Description'
                    value={updatedEvent.event_description}
                    name='event_description'
                    onChange={handleInputChange}
                    ></textarea>

                    <textarea
                    type='text'
                    placeholder='Sponsors'
                    value={updatedEvent.sponsors}
                    name='sponsors'
                    onChange={handleInputChange}
                    ></textarea>

                    <button type='submit'>Submit</button>
                </form>)

                :

                (<div></div>)
            }

                
            </Modal>
        </div>
    )

}

export default AdminEditEventModal; 
