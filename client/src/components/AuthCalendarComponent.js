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
        navigate(`/upcoming/${selectedEvent.id}`)
    }

    // function handleSelectEvent (e) {
    //     console.log(e)
    //     setSelectedEvent(e)
    //     navigate(`/upcoming/${selectedEvent.id}, {state:{handleShow, handleClose}}`)

    // }

    useEffect(()=> {
        fetch('/town_events')
        .then(res=>res.json())
        .then((res)=> {
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
                    id: eachEvent.id
                    
                }
            })
            )
        })
    }, [stateToRerender])

    // console.log(eventInfoToPass)
    return(
        <div className="calendar-page">
            <Row>
                <Col xs={2}>
                    <h1>Town Calendar</h1>
                    {currentOrganizer ? (<Link to='/my-organized-events' currentOrganizer={currentOrganizer}> <h3>My Events</h3> </Link>)
                    :
                    (null)
                    }
                    {currentOrganizer&&currentOrganizer.admin ? (<Link to='/all-events' state={eventInfoToPass}>All Events</Link>) : (<></>)}

                    {currentUser && currentUser.signups ? (<p>You have upcoming events!</p>)
                    :
                    (null)
                    }
                </Col>
                <Col xs={9}>
                    <Calendar 
                    localizer={localizer} 
                    events={fetchedEvents} 
                    onSelectEvent={handleShow} 
                    startAccessor="start" 
                    endAccessor="end" 
                    style={{ height: 750, margin: "50px" }}
                    eventPropGetter={(e)=> {
                        // console.log(e)
                        const backgroundColor = e.allday ? 'green' : 'blue'
                        return {style: {backgroundColor}}
                    }} />
                </Col>
            </Row>
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