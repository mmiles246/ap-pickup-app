import { useState } from 'react'
import axios from "axios";

function OrganizerApplication () {
    const [appData, setAppData] = useState({
        name: '',
        email: '',
        message: '',
        references: '',
    })

    function handleAppChange (e) {
        const {name, value} = e.target;

        setAppData({
            ...appData,
            [name]: value
        });
    }

    function sendMessage () {
        const formData =new FormData()
        // formData
    }

    

    function submitApplication (e) {
        e.preventDefault()

        const data ={
            Name: appData.name,
            Email: appData.email,
            Message: appData.message,
            References: appData.references
        }

        axios.post('https://sheet.best/api/sheets/ddf64070-863e-4192-a365-c67a2d7f8d7d', data).then((res)=> {console.log(res)})

        // fetch('https://sheet.best/api/sheets/ddf64070-863e-4192-a365-c67a2d7f8d7d', {
        //     method: 'POST',
        //     header: {
        //         // 'Accept': 'application/json',
        //         'Content-Type': 'text/xml'
        //     },
        //     body: JSON.stringify({
        //         name: appData.name,
        //         email: appData.email,
        //         message: appData.message,
        //         references: appData.references
        //     })
        // })
        // .then(res=>{
        //     res.json()
        // })
        // .then(data => {
        //     console.log(data)
        // })
    }

    return(
        <>
        <form onSubmit={submitApplication}>
            <input type='text' name='name' placeholder='Enter Name' value={appData.name} onChange={handleAppChange} />
            <input type='email' name='email' placeholder='Enter Email' value={appData.email} onChange={handleAppChange} />
            <textarea name='message' placeholder='Reason for Applying' value={appData.message} onChange={handleAppChange} />
            <input  type='text' name='references' placeholder='References' value={appData.references} onChange={handleAppChange} />
            <br></br>
            <button type='submit' >Submit</button>
        </form>
        </>
    )

}

export default OrganizerApplication;