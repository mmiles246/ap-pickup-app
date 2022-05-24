import { useState } from 'react'
import {useLocation} from 'react-router-dom'
import DatePicker from "react-datepicker";


function EditEventPage ({eachEvent}) {
    const [eventToEdit, setEventToEdit]=useState({})
    const [editedEvent, setEditedEvent]=useState({
        name: "",
        type_of: "",
        start_time: new Date(),
        end_time: new Date(),
        location: "" 
    })
    const [showEdit, setShowEdit]=useState(false)

    const location =useLocation()

    console.log(eachEvent)
    const thisEvent = location.state.eachEvent
    console.log(thisEvent)

    function editEventClick (e) {
        console.log(e)
        setEventToEdit(thisEvent)
        setShowEdit(true)
    }


    function deleteEventClick (e) {
        console.log(e)
        fetch(`/my_event/${thisEvent.id}`, {
            method: 'DELETE',
            credentials: 'include'
        })
    }

    function handleEditSubmit (e) {
        e.preventDefault()
        fetch(`/my_event/${thisEvent.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( {
                name: editedEvent.name,
                type_of: editedEvent.type_of,
                start_time: editedEvent.start_time,
                end_time: editedEvent.end_time,
                location: editedEvent.location

            })
        })
    }


   
    function handleInputChange (e) {
        const {name, value} = e.target;

    
        setEditedEvent({
            ...editedEvent,
            [name]: value
        });
    }

    console.log(editedEvent)
    return (
        <div>
            <h1>{thisEvent.name}</h1>
            <button onClick={deleteEventClick}>Delete</button>
            <button onClick={editEventClick}>Edit</button>
            <br></br>
            <br></br>
            --------------
            <br></br>
            <br></br>
            {showEdit ? 
            (<form onSubmit={handleEditSubmit}>
                 <input
                type='text'
                placeholder='Name of Event'
                value={editedEvent.name}
                name='name'
                onChange={handleInputChange}
                >
                </input>

                <input
                type='text'
                placeholder='Type of Event'
                value={editedEvent.type_of}
                name='type_of'
                onChange={handleInputChange}
                >
                </input>

                
                <DatePicker placeholderText='Start Time' showTimeSelect selected={editedEvent.start_time} onChange={(start_time)=> setEditedEvent({...editedEvent, start_time})} />

                <DatePicker placeholderText='End Time' showTimeSelect selected={editedEvent.end_time} onChange={(end_time)=> setEditedEvent({...editedEvent, end_time})} />

                <input
                type='text'
                placeholder='Location of Event'
                value={editedEvent.location}
                name='location'
                onChange={handleInputChange}
                >
                </input>

                <button type='submit'>Submit</button>

            </form>
            )
            :
            (<></>)
            }
        </div>
    )

}

export default EditEventPage;