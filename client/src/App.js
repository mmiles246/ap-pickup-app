import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AuthenticatedApp from './AuthenticatedApp';
import UnAuthenticatedApp from './UnAuthenticatedApp';

function App() {
    const [currentUser, setCurrentUser]=useState(null)
    const [currentOrganizer, setCurrentOrganizer]=useState(null)
    const [authChecked, setAuthChecked]=useState(false)
  
    useEffect(() => {
      fetch("/logged_in", {
        credentials: 'include'
      })
        .then((r) => {
          if (r.ok) {
          r.json().then((user=> {
            user.is_user ? (setCurrentUser(user)) : (setCurrentUser(null))
            user.is_organizer ? (setCurrentOrganizer(user)) : setCurrentOrganizer(null)

            user.is_user||user.is_organizer ? setAuthChecked(true) : setAuthChecked(false)
          }))
        } else {
          setAuthChecked(true)
        }
        })
    }, []);


    if(!authChecked) {return <div></div>}

    return (
      <BrowserRouter>
        {currentUser||currentOrganizer ? (<AuthenticatedApp currentUser={currentUser} setCurrentUser={setCurrentUser} setCurrentOrganizer={setCurrentOrganizer} currentOrganizer={currentOrganizer} />)
        :
        (<UnAuthenticatedApp setCurrentUser={setCurrentUser} setCurrentOrganizer={setCurrentOrganizer} currentUser={currentUser} />)
        }
      </BrowserRouter>
    )
}

export default App;


