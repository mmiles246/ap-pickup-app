import NavBar from "./components/NavBar";
import LogoutBttn from "./components/LogoutBttn";
import { Route, Routes } from "react-router-dom";
import AuthenticatedHome from "./components/AuthenticatedHome";
import UserLogin from "./components/UserLogin";
import OrganizerLogin from "./components/OrganizerLogin";
import OrganizeEvent from "./components/OrganizeEvent";
import AuthCalendarComponent from "./components/AuthCalendarComponent";
import OrganizedEventsPage from "./components/OrganizedEventsPage";
import EditEventPage from "./components/EditEventPage";


function AuthenticatedApp ({currentUser, setCurrentUser, setCurrentOrganizer, currentOrganizer}) {

    return (<div>
        <Routes>

            <Route path='/' element={(<NavBar setCurrentUser={setCurrentUser} currentUser={currentUser} currentOrganizer={currentOrganizer} setCurrentOrganizer={setCurrentOrganizer} />)} >
                <Route index element={<AuthenticatedHome />} />
                <Route path='upcoming' element={<AuthCalendarComponent currentUser={currentUser} currentOrganizer={currentOrganizer} />} >
                    <Route path=':town_event_id'/>
                    
                </Route>
                <Route path='my-organized-events' element={<OrganizedEventsPage currentOrganizer={currentOrganizer} />} >
                    <Route path=':event_id' element={<EditEventPage currentOrganizer={currentOrganizer} />} />
                </Route>
                <Route path="login" element={<UserLogin/>} />
                <Route path="organizer-login" element={<OrganizerLogin />} />
                <Route path="organize-event" element={<OrganizeEvent />} />
            </Route>
             </Routes>
            {/* {!currentUser ? (<LogoutBttn setCurrentUser={setCurrentUser} setCurrentOrganizer={setCurrentOrganizer} />) : (<></>)} */}
       
    </div>)

}

export default AuthenticatedApp;



// {currentOrganizer ? (<Route path="/" element={<OrganizerNavBar />} >)
//             :
//             (<Route path="/" element={<NavBar setCurrentUser={setCurrentUser} currentUser={currentUser}/>} >)}