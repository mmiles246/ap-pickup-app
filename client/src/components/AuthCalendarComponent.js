import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { useState, useEffect} from 'react';
import { useNavigate, Link, Outlet } from "react-router-dom";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {Modal, Button} from 'react-bootstrap'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { ca } from "date-fns/locale";
import EventModal from "./EventModal";
import OrganizerEventModal from "./OrganizerEventModal";
import AllTownEventsEdit from "./AllTownEventsEdit";
import { set } from "date-fns";



const locales = {
    "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

function AuthCalendarComponent ({currentUser, currentOrganizer}) {
    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [fetchedEvents, setFetchedEvents] = useState([]);
    const [eventInfoToPass, setEventInfoToPass]=useState([])
    const [stateToRerender, setStateToRerender]=useState(false)

    const navigate = useNavigate()

    const [selectedEvent, setSelectedEvent] = useState(undefined);
    const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);

    function handleClose (e) {
        setShow(false)
        navigate('/upcoming')
    }

    function handleShow (e) {
        setSelectedEvent(e)
        setShow(true)
        // console.log(selectedEvent.id)
        // navigate(`/upcoming/${selectedEvent.id}`)
    }

    let myEventsArray=[];
    let signupsArray=[];



    useEffect(()=> {
        fetch('/town_events')
        .then(res=>res.json())
        .then((res)=> {
            console.log(res)
            setStateToRerender(false)
            setEventInfoToPass(res)
            setFetchedEvents(res.map(eachEvent=> {
                return {
                    title: eachEvent.name,
                    start: new Date(eachEvent.start_time),
                    end: new Date(eachEvent.end_time), 
                    type_of: eachEvent.type_of,
                    location: eachEvent.location,
                    event_description: eachEvent.event_description,
                    organizer: eachEvent.organizer,
                    user_comments:eachEvent.user_comments,
                    signups: eachEvent.signups,
                    id: eachEvent.id,
                    signup_ids: eachEvent.signups_user_ids
                    
                }
            })
            )
            // let myEventsArray=[];
            // if(current_user.is_organizer) {
            //     current_user.town_events.forEach((townEvent)=> {
            //     myEventsArray.push(townEvent.id)
            //     })
            //     console.log(myEventsArray)
            // }
            // if (current_user.is_user) {
            //     current_user.signups.forEach((signup)=> {
            //     signupsArray.push(signup.town_event_id)
            //     })
            //     console.log(signupsArray)
            // }
        })
    }, [stateToRerender])
    
    let current_user;
    if (currentUser) {
        current_user=currentUser
    } else if (currentOrganizer) {
        current_user=currentOrganizer
    }
    // let signupsArray=[];
    if (current_user.is_user) {
    current_user.signups.forEach((signup)=> {
        signupsArray.push(signup.town_event_id)
    }) 
}

    

    // console.log(eventInfoToPass)
    return(
        <div className="calendar-page">
            {/* <Row> */}
                {/* <Col xs={1}> */}
                    <div className='calendar-header'>
                        <div className='calendar-header-title'>
                            <h1>Town Calendar</h1>
                            {currentUser && currentUser.signups ? <p>You have upcoming events!</p> : ''}
                        </div>
                        <br></br>
                        {currentOrganizer ? (<Link to='/my-organized-events' currentOrganizer={currentOrganizer}> <h3>My Events</h3> </Link>)
                        :
                        <></>
                        }
                        {currentOrganizer&&currentOrganizer.admin ? (<Link to='/all-events' state={eventInfoToPass}>All Events</Link>) : (<></>)}
                        <br></br>
                        <div className='event-color-key'>
                            {currentUser && currentUser.signups ? (
                                <div>
                                
                                <br></br>
                                <h3>Color key</h3>
                                <span id='rsvp'>Rsvp'd</span>
                                <br></br>
                                <span id='social'>Social type event</span>
                                <br></br>
                                <span id='arts'>Arts type event</span>
                                <br></br>
                                <span id='sports'>Sports type event</span>
                                <br></br>
                                <span id='volunteer'>Volunteer type event</span>
                                </div>)
                                :
                                <></> }
                        </div>
                    </div>
                    

                    
                   
                {/* </Col> */}
                <div className='calendar-component'>
                    {/* <Col xs={9}> */}
                    <Calendar 
                    localizer={localizer} 
                    events={fetchedEvents} 
                    onSelectEvent={handleShow} 
                    startAccessor="start" 
                    endAccessor="end" 
                    style={{ height: 750, margin: "50px" }}
                    eventPropGetter={(e)=> {
                        let backgroundColor;
                        if (current_user.is_organizer) {
                            backgroundColor='blue'
                        } else if (current_user.is_organizer&&myEventsArray.includes(e.id)) {
                            backgroundColor='green'
                        } else if (current_user.is_user&&e.signup_ids.includes(currentUser.id)) {
                                backgroundColor='lightgreen'
                            } else if (e.type_of==='social') {
                                backgroundColor='indigo'
                            } else if (e.type_of==='sports') {
                                backgroundColor='red'
                            } else if (e.type_of === 'volunteer') {
                                backgroundColor='green'
                            } else if (e.type_of === 'arts') {
                                backgroundColor='lightblue'
                            }
                        return {style: {backgroundColor}}
                        }} />
                    {/* </Col> */}
                </div>
                
            {/* </Row> */}
            {(currentUser && show) ? (<EventModal selectedEvent={selectedEvent} show={show} setShow={setShow} handleClose={handleClose} handleShow={handleShow} eventInfoToPass={eventInfoToPass} currentUser={currentUser} currentOrganizer={currentOrganizer} setStateToRerender={setStateToRerender} />)
            :
            <></>}

            {(currentOrganizer && show) ? (<OrganizerEventModal selectedEvent={selectedEvent} show={show} setShow={setShow} handleClose={handleClose} currentOrganizer={currentOrganizer} />)
            :
            (<></>)
            }
            <Outlet />
        </div>
    )

}

export default AuthCalendarComponent;