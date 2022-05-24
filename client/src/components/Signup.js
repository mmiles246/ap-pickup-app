import {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Select from 'react-select'



function Signup ({setCurrentUser, currentUser, currentOrganizer}) {
    const navigate=useNavigate()
    const [checkedState, setCheckedState]=useState(false)
    const [signupInfo, setSignupInfo]=useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    interested_in: [],
    newsletter: false
    })

    const options = [
        {value: 'volunteer', label: 'Volunteer'},
        {value: 'sports', label: 'Sports'},
        {value: 'arts', label: 'Arts'},
        {value: 'social', label: 'Social'}
    ]

    function handleInputChange (e) {
        const {name, value} = e.target;

    
        setSignupInfo({
            ...signupInfo,
            [name]: value
        });
    }

    function handleCheckboxClick (e) {
        setCheckedState(!checkedState)
        setSignupInfo({
            ...signupInfo,
            newsletter: true
        })
    }

    function handleSubmit (e) {
    e.preventDefault()
    fetch('/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({    
        first_name: signupInfo.first_name,
        last_name: signupInfo.last_name,
        email: signupInfo.email,
        password: signupInfo.password,
        interested_in: signupInfo.interested_in,
        newsletter: signupInfo.newsletter
    })
    })
    .then(res=> {
        if (res.ok) {
            res.json().then(user => {
                setCurrentUser(user)
                navigate('/')
            })
        } else {
            res.json().then(errors=> {
                console.error(errors)
            })
        }
    })
    }



// onSubmit={handleSubmit}
    return(
        <div className='signup-page'>
            <div className="signup-box">
                <form className="signup-form" onSubmit={handleSubmit} >
                    {/* <label htmlFor="first_name_signup">First Name</label> */}
                    <input id="first-name-signup" 
                    type="text" 
                    placeholder="First Name"
                    value={signupInfo.first_name}
                    name='first_name'
                    onChange={handleInputChange}
                    ></input>

                    {/* <label htmlFor="last_name_signup">Last Name</label> */}
                    <input id="last-name-signup" 
                    type='text' 
                    placeholder="Last Name"
                    value={signupInfo.last_name}
                    name='last_name'
                    onChange={handleInputChange}
                    ></input>

                    <br></br>

                    {/* <label htmlFor="email_signup">Email</label> */}
                    <input id="email-signup" 
                    type='email' 
                    placeholder="Email"
                    value={signupInfo.email}
                    name='email'
                    onChange={handleInputChange}
                    ></input>

                    <br></br>

                    {/* <label htmlFor="password_signup">Password</label> */}
                    <input id="password-signup" 
                    type='password' 
                    placeholder="Password"
                    value={signupInfo.password}
                    name='password'
                    onChange={handleInputChange}
                    ></input>

                    <br></br>

                    <Select isMulti options={options} value={signupInfo.interested_in} />

                    <span>Would you like to recieve emails about new events in the area?</span>

                    <br></br>
                    <label htmlFor='newsletter'>Newsletter:</label>
                    <input
                    id='newsletter'
                    type='checkbox'
                    value={signupInfo.newsletter}
                    ></input>

                    <br></br>
{/* 
                    <input id='password-confirmation'
                    type='password'
                    placeholder='Confirm Password'
                    value={} */}

                    <button type='submit'>Submit</button>

                </form>

                <br></br>

            </div>
            
            <br></br>

            <div className='login-link'>
                <p>Already a member?</p>
                <Link to="/login">Login Here</Link>

            </div>
        </div>
    )   

}

export default Signup