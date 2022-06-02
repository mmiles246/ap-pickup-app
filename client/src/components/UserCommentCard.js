function UserCommentCard ({eachComment, userThatCommented}) {

    console.log(eachComment)
    return(
        <div className='comment-blurb'>
            <h4>{eachComment.content}</h4>
            <h6>{userThatCommented}</h6>
        </div>
    )
}

export default UserCommentCard;