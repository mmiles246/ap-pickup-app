import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { useState, useEffect} from 'react';
import { useNavigate, Link } from "react-router-dom";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {Modal, Button} from 'react-bootstrap'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { ca } from "date-fns/locale";
import UnAuthEventModal from "./UnAuthEventModal";
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

function UnAuthCalendarComponent () {
    // const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [fetchedEvents, setFetchedEvents] = useState([]);
    // const [eventInfoToPass, setEventInfoToPass]=useState([])

    const [selectedEvent, setSelectedEvent] = useState(undefined);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    // const navigate = useNavigate()

    function handleShow (e) {
        console.log(e)
        setSelectedEvent(e)
        setShow(true)
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
            setFetchedEvents(res.map(eachEvent=> {
                return {
                    title: eachEvent.name,
                    start: new Date(eachEvent.start_time),
                    end: new Date(eachEvent.end_time), 
                    type_of: eachEvent.type_of,
                    location: eachEvent.location,
                    id: eachEvent.id
                }
            })
            )
        })
    }, [])

    return(
        <div className="calendar-page">
            <Row>
                {/* <Col xs={2}> */}
                    <h1>Town Events</h1>
                    
                {/* </Col> */}
                {/* <Col xs={8}> */}
                <div className='calendar-component'>
                    <Calendar 
                    localizer={localizer} 
                    events={fetchedEvents} 
                    onSelectEvent={handleShow} 
                    startAccessor="start" 
                    endAccessor="end" 
                    style={{ height: 750, margin: "50px" }}
                    eventPropGetter={(e)=> {
                        const backgroundColor = e.allday ? 'green' : 'blue'
                        return {style: {backgroundColor}}
                    }} />
                </div>
                    
                {/* </Col> */}
            </Row>
            {show ? (<UnAuthEventModal show={show} setShow={setShow} handleClose={handleClose} handleShow={handleShow} />)
            :
            <></>}
        </div>
    )

}

export default UnAuthCalendarComponent;