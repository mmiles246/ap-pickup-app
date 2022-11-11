function OrganizerCommentCard ({eachComment, organizerThatCommented, comment}) {
    console.log(comment)
    return(
        <div className='organizer-comment-blurb'>
            <h4>{eachComment}</h4>
            {/* <h6>{organizerThatCommented}</h6> */}
        </div>
    )
}

export default OrganizerCommentCard;