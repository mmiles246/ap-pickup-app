import UserCommentForm from './UserCommentForm';
import UserCommentCard from './UserCommentCard';

import {useState, useEffect} from 'react'
import { set } from 'date-fns';


function CommentsSection ({currentUser, thisEvent}) {
    const [commentText, setCommentText]=useState("")
    const [fetchedUserComments, setFetchedUserComments]=useState([])
    const [submitState, setSubmitState]=useState(false)
    const disableSubmit = commentText.length === 0;

    useEffect(()=> {
        fetch('/user_comments')
        .then(res=> {
            if(res.ok){
                res.json().then(user_comments => {
                    setFetchedUserComments(user_comments)
                    setSubmitState(false)
                })
            }
        })
        
    }, [submitState] )

    console.log(fetchedUserComments)

    function commentsMapper (eachComment) {
        return <UserCommentCard key={eachComment.id} eachComment={eachComment} />
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
            {fetchedUserComments.map(commentsMapper)}
            <UserCommentForm handleSubmit={handleSubmit} setCommentText={setCommentText} commentText={commentText} currentUser={currentUser}/>
        </div>
    )
    
}

export default CommentsSection;


// .then(fetch('/event_comments').then(res=>res.json()).then((comments)=>setFetchedUserComments(comments)))