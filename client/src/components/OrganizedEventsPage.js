import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import EachEventCard from './EachEventCard'
import {Modal} from 'react-bootstrap'
import EditEventModal from './EditEventModal'
import { set } from 'date-fns'


function OrganizedEventsPage ({currentOrganizer}) {
    const [eventPageInfo, setEventPageInfo]=useState([])
    const [eventToEdit, setEventToEdit]=useState(undefined)
    const [stateToRerender, setStateToRerender]=useState(false)
    const [filterState, setFilterState]=useState()

    let filteredArray = []
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);


    useEffect(()=>{
        fetch('/town_event_page')
        .then(res=>res.json())
        .then((res)=> {
            console.log(res)
            setEventPageInfo(res.town_events)
            setStateToRerender(false)
        })
    }, [stateToRerender])
    console.log(eventPageInfo)

    function filterFunction (e) {
        setFilterState(e.target.value)

        if (filterState === 'start_time') {
            eventPageInfo.sort(function(a, b){
                let adate = a.start_time
                let bdate = b.start_time

                if (adate < bdate) {
                    return -1;
                }
                if (adate > bdate) {
                    return 1;
                }
                return 0;
            })
        } else if (filterState === 'type_of') {
            eventPageInfo.sort(function(a, b){
                let atype = a.type_of
                let btype = b.type_of

                if (atype < btype) {
                    return -1
                }
                if (atype > btype) {
                    return 1
                }
                return 0;
            })
        } else if (filterState === 'rsvps') {
            eventPageInfo.sort(function(a, b){
            let arsvps = a.signups.length
            let brsvps = b.signups.length

            if (arsvps > brsvps) {
                return -1
            }
            if (arsvps > brsvps) {
                return 1
            }
            return 0;
        })
        }
    }

    return (
        <div className='organized-events-page'>
            <br></br>
            <h1>Your Upcoming events</h1>
            <br></br>
            <label htmlFor='filter'>Filter:</label>

            <select
            type='select'
            name='fiter'
            onChange={filterFunction}
            >
                <option value='start_time'>Event Type</option>
                <option value='type_of'>RSVPs</option>
                <option value='rsvps'>Date</option>
            </select>
            <div className='each-event-card'>
                {eventPageInfo.map((eachEvent)=>{
                    return(
                    <EachEventCard key={eachEvent.id} eachEvent={eachEvent} />
                    )
                })}
            </div>
            <EditEventModal show={show} setShow={setShow} handleClose={handleClose} eventToEdit={eventToEdit} setStateToRerender={setStateToRerender}/>

        </div>)
}

export default OrganizedEventsPage;