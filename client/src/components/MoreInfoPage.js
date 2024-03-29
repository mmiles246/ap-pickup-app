import { useLocation } from 'react-router-dom'
import CommentsSection from './CommentsSection';

function MoreInfoPage () {
    const location = useLocation();

    // console.log(location.state.event)
    // console.log(location.state.currentUser)

    const thisEvent= location.state.event
    const currentUser= location.state.currentUser

    return (
        <div className='event-page-header'>
            <div className='panel-1'> 
                <div className='event-page-left-text'>
                    <div className='info-container'>
                        <h1>{thisEvent.title}</h1>
                        {/* <h3>Organized by: {thisEvent.organizer.first_name} {thisEvent.organizer.last_name} </h3> */}
                        <h4>Location: {thisEvent.location}</h4>
                        <h4>Starting at: {thisEvent.start.toDateString()}</h4>
                        <h5>{thisEvent.start.toLocaleTimeString()}</h5>
                        <h6>Organized by: {thisEvent.organizer.first_name} {thisEvent.organizer.last_name}</h6>
                        <br></br>
                        <br></br>
                    </div>
                    <br></br>
                    <br></br>
                    <div className='organizer-info-container'>
                        <h3>A little bit about: {thisEvent.organizer.first_name}</h3>
                        <p>{thisEvent.organizer.about}</p>
                    </div>
                </div>
            </div>
            <div className='panel-2'>
                <div className='description-container'>
                    <h2>Event Details</h2>
                    <h5>{thisEvent.event_description}</h5>
                </div>
                <br></br>
                <div className='comments-container'>
                    <CommentsSection currentUser={currentUser} thisEvent={thisEvent} />
                </div>
            </div>
        </div>
    )

}

export default MoreInfoPage;