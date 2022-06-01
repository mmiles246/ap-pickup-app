import UserCommentForm from './UserCommentForm';
import UserCommentCard from './UserCommentCard';

import {useState, useEffect} from 'react'
import { set } from 'date-fns';


function CommentsSection ({currentUser, thisEvent}) {
    const [commentText, setCommentText]=useState("")
    const [fetchedUserComments, setFetchedUserComments]=useState(thisEvent.user_comments)
    const [submitState, setSubmitState]=useState(false)
    const disableSubmit = commentText.length === 0;

    console.log(thisEvent)

    // useEffect(()=> {
    //     fetch(`/town_events/${thisEvent.id}`)
    //     .then(res=> res.json()
    //     //     if(res.ok){
    //     //         res.json().then(event => {
    //     //             setFetchedUserComments(event)
    //     //             setSubmitState(false)
    //     //         })
    //     //     }
    //     // }
    //     ).then(res=> console.log(res))
        
    // }, [] )

    // useEffect(()=> {
    //     fetch(`/town_events/${thisEvent.id}`)
    //     .then(res=>res.json())
    //     .then(response=>{
    //         setFetchedUserComments(response.user_comments)
    //     })
    // }, [submitState])

    useEffect(()=> {
        fetch('/user_comments')
        .then(res=>res.json())
        .then((res) => {
            console.log(res)
            setFetchedUserComments(res)
        })
    }, [submitState])

    console.log(fetchedUserComments)
    let thisEventComments=[];
    fetchedUserComments.forEach((eachComment)=> {
        if (eachComment.town_event_id === thisEvent.id) {
            thisEventComments.push(eachComment)
        }
    })
    

    console.log(thisEventComments)

    function commentsMapper (eachComment) {
        return <UserCommentCard key={eachComment.id} eachComment={eachComment}  />
    }

    function handleSubmit (e) {
        e.preventDefault()
        fetch('/event_comments', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                content: commentText,
                user_id: currentUser.id,
                town_event_id: thisEvent.id
            })
        })
        setCommentText("")
        setSubmitState(true)
    }

    

    return(
        <div className='comment-section'>
            <h1>Comments Will be Here</h1>
            {thisEventComments.map(commentsMapper)}
            <UserCommentForm handleSubmit={handleSubmit} setCommentText={setCommentText} commentText={commentText} currentUser={currentUser}/>
        </div>
    )
    
}

export default CommentsSection;


// .then(fetch('/event_comments').then(res=>res.json()).then((comments)=>setFetchedUserComments(comments)))