import {useState} from 'react'
import DatePicker from "react-datepicker";

function OrganizeEvent () {
    const [newEvent, setNewEvent]=useState({
        name: "",
        type_of: "",
        start_time: new Date(),
        end_time: new Date(), 
        location: ""

    })

    function handleInputChange (e) {
        const {name, value}=e.target;

        setNewEvent({
            ...newEvent,
            [name]: value
        });
    }

    function handleSubmit (e) {
        e.preventDefault()
        fetch('/organize_event', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: newEvent.name,
                type_of: newEvent.type_of,
                start_time: newEvent.start_time,
                end_time: newEvent.end_time,
                location: newEvent.location,
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
            <form onSubmit={handleSubmit}>
                <input
                type='text'
                placeholder='Name of Event'
                value={newEvent.name}
                name='name'
                onChange={handleInputChange}
                >
                </input>

                <input
                type='text'
                placeholder='Type of Event'
                value={newEvent.type_of}
                name='type_of'
                onChange={handleInputChange}
                >
                </input>
                
                <DatePicker placeholderText='Start Time' showTimeSelect selected={newEvent.start_time} onChange={(start_time)=> setNewEvent({...newEvent, start_time})} />

                <DatePicker placeholderText='End Time' showTimeSelect selected={newEvent.end_time} onChange={(end_time)=> setNewEvent({...newEvent, end_time})} />

                <input
                type='text'
                placeholder='Location of Event'
                value={newEvent.location}
                name='location'
                onChange={handleInputChange}
                >
                </input>

                <button type='submit'>Submit</button>
            </form>
        </div>)

}

export default OrganizeEvent;