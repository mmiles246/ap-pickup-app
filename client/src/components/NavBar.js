import {Link, Outlet} from 'react-router-dom'
import LogoutBttn from './LogoutBttn';
import appLogo from '../imgs/APlogo.png'

function NavBar ({currentUser, setCurrentUser, currentOrganizer , setCurrentOrganizer}) {
    // console.log(currentOrganizer)
    // console.log(currentOrganizer.profile_img)
    console.log(currentUser)
    const primaryNav = document.querySelector('.primary-navigation')
    const mobileToggle = document.querySelector('.mobile-nav-toggle')

    function navToggle (e) {
        const visibility = primaryNav.getAttribute('data-visible')
        if (visibility === 'false') {
            primaryNav.setAttribute('data-visible', true)
            mobileToggle.setAttribute('aria-expanded', true )
            } else if (visibility ==='true') {
            primaryNav.setAttribute('data-visible', false)
            mobileToggle.setAttribute('aria-expanded', false )
        }
    }

    return(
    <div className="navbar flex">
        <div>
            <img className='logo' src={appLogo}></img>
        </div>

        <button onClick={navToggle} className='mobile-nav-toggle' aria-controls='primary-navigation' aria-expanded='false'><span>Menu</span></button>
        <nav>
                <ul className="primary-navigation flex" data-visible='false' id='primary-navigation'>
                    
                    <li className='nav-links'>
                        <Link to='/' style={{color: '#333'}}>
                            <span>Home</span>
                        </Link>
                    </li>
                    <li className='nav-links'>
                        <Link to='/upcoming ' style={{color: '#333'}} currentUser={currentUser}>
                            <span>Upcoming Events</span>
                        </Link>
                    </li>
                    {currentOrganizer ? (<li className='nav-links'><Link to='organize-event' style={{color: '#333'}}><span>Organize Event</span></Link></li>)
                    :
                    (<></>)}
                    <li className='nav-links'>
                        <Link to='/contactus' style={{color: '#333'}}>
                        <span>Contact Us</span>
                        </Link>
                    </li>
                    {currentUser||currentOrganizer ? (<></>)
                    :
                    (<li className='nav-links'>
                        <div id='signup-bttn'>
                            <Link to='/login' style={{color: '#aliceblue'}}>
                                <span>Login</span>
                            </Link>
                        </div>
                    </li>)}
                    {currentUser||currentOrganizer ? (<li id='logout-bttn'><LogoutBttn setCurrentUser={setCurrentUser} setCurrentOrganizer={setCurrentOrganizer}/></li>)
                    :
                    (<li className='nav-links'></li>)}
                </ul>
            </nav>
        <Outlet />
    </div>)

}

export default NavBar;


