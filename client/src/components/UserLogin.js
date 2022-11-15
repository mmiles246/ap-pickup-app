import {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {Toast} from 'react-bootstrap'

function UserLogin ({setCurrentUser, currentUser}) {
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const [errorState, setErrorState]=useState([])
    const [showA, setShowA] = useState(false);
    const toggleShowA = () => setShowA(!showA);

    const navigate=useNavigate()

    function handleLoginSubmit (e) {
        e.preventDefault()
        fetch ('/user_login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'Accept': 'application/png'
            },
            body: JSON.stringify({email, password})
        })
        .then(res=> {
            if (res.ok) {
                res.json().then(user=> {
                    setCurrentUser(user)
                    navigate('/')
                })
            } else {
                res.json().then(errors=> {
                    console.log(errors)
                    setErrorState(errors)
                    setShowA(true)
                })
            }
        })
    }



    return (
        <div className='login-page'>
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
                <div className='login-header'>
                    <h1>Login</h1>
                </div>
                <div className='login-form'>
                    <form onSubmit={handleLoginSubmit} className="login-form">
                        <span>
                            <i></i>
                            <input
                            type='text'
                            name='email'
                            placeholder='email'
                            value={email}
                            onChange={(e)=> setEmail(e.target.value)}
                            >
                            </input>
                        </span>
                        <br></br>
                        <br></br>

                        <span>
                            <i></i>
                            <input
                            type='password'
                            name='password'
                            placeholder="password"
                            value={password}
                            onChange={(e)=> setPassword(e.target.value)}>
                            </input>
                        </span>
                        <button type='submit'>Submit</button>
                    </form>
                </div>
                <br></br>
                <p>New user? Signup <Link to='/signup'>here</Link></p>
                <br></br>
                <p id='organizer-login-link'>Organizer Account? Sign in <Link to='/organizer-login'>here</Link></p>
            </div>
        </div>
        )

}

export default UserLogin;



// {...currentUser,
//                         first_name: user.user.first_name,
//                         last_name: user.user.last_name,
//                         email: user.user.email,
//                         password_digest: user.user.password_digest,
//                         about: user.user.about,
//                         newsletter: user.user.newsletter,
//                         profile_img: user.profile_img
//                     }