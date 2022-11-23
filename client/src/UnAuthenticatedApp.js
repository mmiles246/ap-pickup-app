import {Routes, Route} from 'react-router-dom'
import NavBar from "./components/NavBar";
import OrganizerLogin from './components/OrganizerLogin';
import UnAuthenticatedHome from './components/UnAuthenticatedHome';
import UserLogin from "./components/UserLogin";
import UnAuthCalendarComponent from './components/UnAuthCalendarComponent';
import Signup from './components/Signup';
import ContactPage from './components/ContactPage';

function UnAuthenticatedApp ({setCurrentUser, setCurrentOrganizer, currentUser, currentOrganizer}) {

    return(
        <div className='app-home'>
            <Routes>
                <Route path='/' element={<NavBar />}>
                    <Route index element={<UnAuthenticatedHome/>} />
                    <Route path='upcoming' element={<UnAuthCalendarComponent currentUser={currentUser} currentOrganizer={currentOrganizer} />} />
                    <Route path='contactus' element={<ContactPage currentUser={currentUser} />} />
                    <Route path='login' element={<UserLogin setCurrentUser={setCurrentUser} currentUser={currentUser} />} />
                    <Route path='/signup' element={<Signup setCurrentUser={setCurrentUser} />} />
                    <Route path='organizer-login' element={<OrganizerLogin setCurrentOrganizer={setCurrentOrganizer} />} />
                </Route>
            </Routes>
        </div>
    )

}

export default UnAuthenticatedApp;