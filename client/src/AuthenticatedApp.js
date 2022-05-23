import NavBar from "./components/NavBar";
import LogoutBttn from "./components/LogoutBttn";
import { Route, Routes } from "react-router-dom";
import AuthenticatedHome from "./components/AuthenticatedHome";
import UserLogin from "./components/UserLogin";
import OrganizerLogin from "./components/OrganizerLogin";
import OrganizerNavBar from "./components/OrganizerNavBar";
import OrganizeEvent from "./components/OrganizeEvent";


function AuthenticatedApp ({currentUser, setCurrentUser, setCurrentOrganizer, currentOrganizer}) {

    return (<div>
        <Routes>

            <Route path='/' element={(<NavBar setCurrentUser={setCurrentUser} currentUser={currentUser} currentOrganizer={currentOrganizer} setCurrentOrganizer={setCurrentOrganizer} />)} >
                <Route index element={<AuthenticatedHome />} />
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