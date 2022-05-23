import {Routes, Route} from 'react-router-dom'
import NavBar from "./components/NavBar";
import OrganizerLogin from './components/OrganizerLogin';
import UnAuthenticatedHome from './components/UnAuthenticatedHome';
import UserLogin from "./components/UserLogin";

function UnAuthenticatedApp ({setCurrentUser, setCurrentOrganizer}) {

    return(
        <div className='app-home'>
            <Routes>
                <Route path='/' element={<NavBar />}>
                    <Route index element={<UnAuthenticatedHome/>} />
                    <Route path='/login' element={<UserLogin setCurrentUser={setCurrentUser} />} />
                    <Route path='/organizer-login' element={<OrganizerLogin setCurrentOrganizer={setCurrentOrganizer} />} />
                </Route>
            </Routes>
        </div>
    )

}

export default UnAuthenticatedApp;