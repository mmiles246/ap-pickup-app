import {Card} from 'react-bootstrap'

function ContactPage () {

    return (
        <div className='contact-card'>
            <Card>
                <Card.Body>
                    <Card.Title>Contact</Card.Title>
                    <Card.Subtitle>Email us @</Card.Subtitle>
                    <Card.Text>admin@appickup.com</Card.Text>
                </Card.Body>
            </Card>

        </div>
    )

}

export default ContactPage;