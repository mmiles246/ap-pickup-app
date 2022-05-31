import { useState } from 'react'
// import LogoutModal from './LogoutModal'
import {useNavigate} from 'react-router-dom'


function LogoutBttn ({setCurrentOrganizer, setCurrentUser}) {
    // const [show, setShow] = useState(false);
    // const handleClose = () => setShow(false);

    const navigate=useNavigate()



    function handleLogOut (e) {
        // setShow(true)

        fetch('/logout', {
        method: 'DELETE',
        credentials: 'include'
        })
        .then(res=> {
            if(res.ok) {
            setCurrentUser(null)
            setCurrentOrganizer(null)
            alert("You've been logged out.")
            navigate('/')
            }
        })
    }

    return (
        <>
        <button className='logout-bttn' type="submit" onClick={handleLogOut}>Logout</button>
        {/* <LogoutModal show={show} setShow={setShow} handleClose={handleClose} /> */}
        </>
    )

}

export default LogoutBttn;