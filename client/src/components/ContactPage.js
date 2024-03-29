import {Card} from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import OrganizerApplication from './OrganizerApplication';

function ContactPage ({currentUser}) {

    return (
        
            <div className='contact-card-container'>
                <div className='contact-card'>
                    <Card>
                        <Card.Body>
                            <Card.Title>Contact</Card.Title>
                            <Card.Subtitle>Email us @</Card.Subtitle>
                            <Card.Text>admin@appickup.com</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <br></br>
                {currentUser ? <OrganizerApplication /> : <></>}
                
            </div>
            // <Outlet />
    )

}

export default ContactPage;