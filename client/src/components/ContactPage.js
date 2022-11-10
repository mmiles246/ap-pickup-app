import {Card} from 'react-bootstrap'

function ContactPage () {

    return (
        <div >
            <div className='contact-card-container'>
            <Card className='contact-card'>
                <Card.Body>
                    <Card.Title>Contact</Card.Title>
                    <Card.Subtitle>Email us @</Card.Subtitle>
                    <Card.Text>admin@appickup.com</Card.Text>
                </Card.Body>
            </Card>
            </div>
        </div>
    )

}

export default ContactPage;