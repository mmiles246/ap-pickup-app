import {Link, Outlet} from 'react-router-dom'
import LogoutBttn from './LogoutBttn';

function NavBar ({currentUser, setCurrentUser, currentOrganizer , setCurrentOrganizer}) {
    console.log(currentOrganizer)
    // console.log(currentOrganizer.profile_img)
    console.log(currentUser)
    return(<div className="navbar">
        <nav>
                <ul className="primary-navigation">
                    <li>
                        <Link to='/'>
                            <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/upcoming' currentUser={currentUser}>
                            <span>Upcoming Events</span>
                        </Link>
                    </li>
                    {currentOrganizer ? (<li><Link to='organize-event'><span>Organize Event</span></Link></li>)
                    :
                    (<></>)}
                    <li>
                        <Link to='/contactus'>
                        <span>Contact Us</span>
                        </Link>
                    </li>
                    {currentUser||currentOrganizer ? (<></>)
                    :
                    (<li>
                        <div id='signup-bttn'>
                            <Link to='/login'>
                                <span>Login</span>
                            </Link>
                        </div>
                    </li>)}
                    {currentUser||currentOrganizer ? (<li><LogoutBttn setCurrentUser={setCurrentUser} setCurrentOrganizer={setCurrentOrganizer}/></li>)
                    :
                    (<li></li>)}
                </ul>
            </nav>
        <Outlet />
    </div>)

}

export default NavBar;


