import UserCommentForm from './UserCommentForm';
import UserCommentCard from './UserCommentCard';
import OrganizerCommentCard from './OrganizerCommentCard';

import {useState, useEffect} from 'react'
import { set } from 'date-fns';


function CommentsSection ({currentUser, thisEvent, currentOrganizer}) {
    const [commentText, setCommentText]=useState("")
    const [fetchedUserComments, setFetchedUserComments]=useState(thisEvent.user_comments)
    const [organizerComments, setOrganizerComments] = useState(thisEvent.organizer_comments)
    const [submitState, setSubmitState]=useState(false)
    const disableSubmit = commentText.length === 0;

    // console.log(thisEvent)

    useEffect(()=> {
        fetch(`/more-info/${thisEvent.id}`)
        .then(res=>res.json())
        .then((res)=> {
            console.log(res)
            
            setFetchedUserComments(res)
            // setOrganizerComments(res)
            setSubmitState(false)
        })
    }, [submitState])



    let thisEventComments=[];
    fetchedUserComments.forEach((eachComment)=> {
        if (eachComment.town_event_id === thisEvent.id) {
            thisEventComments.push(eachComment)
        }
    })
    


    function commentsMapper (eachComment) {
        return <UserCommentCard key={eachComment.id} eachComment={eachComment} userThatCommented={eachComment.user.first_name} />
    }

    function newCommentMapper (eachComment){
        if(eachComment.hasOwnProperty('organizer_id')){
            return <OrganizerCommentCard key={eachComment.id} eachComment={eachComment.content} organizerThatCommented={eachComment.organizer} comment={eachComment} />
        } else {
            return <UserCommentCard key={eachComment.id} eachComment={eachComment} userThatCommented={eachComment.user.first_name} />
        }
    }

    function organizerCommentMapper (eachComment) {
        return <OrganizerCommentCard key={eachComment.id} eachComment={eachComment.content} organizerThatCommented={eachComment.organizer.first_name} comment={eachComment} />
    }

    function userCommentSubmit (e) {
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

    function organizerCommentSubmit (e) {
        e.preventDefault()
        fetch(`/organizer-event-comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                content: commentText,
                organizer_id: currentUser.id,
                town_event_id: thisEvent.id
            })
        })
        setCommentText("")
        setSubmitState(true)
    }

    

    return(
        <div className='comment-board'>
            <div className='comment-header'>
                <h1>Comment Board</h1>
            </div>
            <div className='comments'>
                {thisEventComments.map(newCommentMapper)}
            </div>
            <UserCommentForm userCommentSubmit={userCommentSubmit} organizerCommentSubmit={organizerCommentSubmit} setCommentText={setCommentText} commentText={commentText} currentUser={currentUser}/>
        </div>
    )
    
}

export default CommentsSection;


