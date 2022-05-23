import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import NavBar from './NavBar'

function OrganizerLogin ({setCurrentOrganizer}) {
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')

    const navigate =useNavigate()

    function handleLoginSubmit (e) {
        e.preventDefault()
        fetch ('/organizer_login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
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
                })
            }
        })
    }

    return (
        <div>
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
        </div>)

}

export default OrganizerLogin;