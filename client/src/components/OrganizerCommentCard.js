import { useState } from 'react'

function OrganizerCommentCard ({eachComment, organizerThatCommented, comment}) {
    const [pinComment, setPinComment] = useState()


    return(

        <div className={comment.town_event.organizer_id===organizerThatCommented.id ? 'pinned-comment' : 'other-organizer-comment'}>
            <div className='comment-body'>
                <h4>{eachComment}</h4>
                {comment.town_event.organizer_id===organizerThatCommented.id ? 
                <div className='pin-toggle'>
                    <input type='checkbox' onClick={()=> setPinComment(true)}/> Pin Comment
                </div> 
                : 
                ''
            }
            </div>
            <div className='commenter'>
                <h6>{organizerThatCommented.first_name}</h6>
            </div>
        </div>
    )
}

export default OrganizerCommentCard;