import {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'

function UserLogin ({setCurrentUser, currentUser}) {
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')

    const navigate=useNavigate()

    function handleLoginSubmit (e) {
        e.preventDefault()
        fetch ('/user_login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/png'
            },
            body: JSON.stringify({email, password})
        })
        .then(res=> {
            if (res.ok) {
                res.json().then(user=> {
                    setCurrentUser({...currentUser,
                        id: user.user.id,
                        first_name: user.user.first_name,
                        last_name: user.user.last_name,
                        email: user.user.email,
                        password_digest: user.user.password_digest,
                        about: user.user.about,
                        newsletter: user.user.newsletter,
                        profile_img: user.profile_img
                    })
                    navigate('/')
                })
            } else {
                res.json().then(errors=> {
                    console.error(errors)
                })
            }
        })
    }

    return (<div>

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
            <p>New user? Singup <Link to='/signup'>here</Link></p>
            <p>Organizer Account? Sign in <Link to='/organizer-login'>here</Link></p>

    </div>)

}

export default UserLogin;