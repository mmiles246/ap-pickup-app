import { useLocation } from 'react-router-dom'

function MoreInfoPage () {
    const location = useLocation();

    const thisEvent= location.state
    const eventDate= new Date(thisEvent.start_time)

    return (
        <div className='event-page-header'>
            <div className='panel-1'> <h1>{thisEvent.name}</h1>
                <div className='event-page-left-text'>
                    <h3>Organized by: {thisEvent.organizer.first_name} {thisEvent.organizer.last_name} </h3>
                    <h4>Location: {thisEvent.location}</h4>
                    <h4>Starting at: {eventDate.toDateString()}</h4>
                    <h5>{eventDate.toLocaleTimeString()}</h5>
                </div>
            </div>
            <div className='panel-2'>
                <div>
                    <h5>{thisEvent.event_description}</h5>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    )

}

export default MoreInfoPage;