import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import NavBar from './NavBar'
import {Toast} from 'react-bootstrap'

function OrganizerLogin ({setCurrentOrganizer}) {
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const [errorState, setErrorState]=useState([])
    const [showA, setShowA] = useState(false);
    const toggleShowA = () => setShowA(!showA);

    const navigate =useNavigate()

    function handleLoginSubmit (e) {
        e.preventDefault()
        fetch ('/organizer_login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, password})
        })
        .then(res=> {
            if (res.ok) {
                res.json().then(user=> {
                    setCurrentOrganizer(user)
                    navigate('/')
                })
            } else {
                res.json().then(errors=> {
                    console.error(errors)
                    setErrorState(errors)
                    setShowA(true)
                })
            }
        })
    }

    return (
        <div className='organizer-login-page'>
            {(errorState) ? 
                (<Toast show={showA} onClose={toggleShowA}>
                    <Toast.Header>
                    Invalid
                    </Toast.Header>
                    <Toast.Body>{errorState.error}</Toast.Body>
              </Toast>)
                :
                (<></>)
            }
            <div className='login-container'>
                <div className='organizer-login-header'>
                    <h1>Login</h1>
                </div>
                <div className='organizer-login-form'>
                    <form onSubmit={handleLoginSubmit} className="login-form">
                    <input
                    type='text'
                    name='email'
                    placeholder='email'
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    >
                    </input>

                    <br></br>
                    <br></br>

                    <input
                    type='password'
                    name='password'
                    placeholder="password"
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}>
                    </input>
                    <button type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </div>)

}

export default OrganizerLogin;