function UserCommentCard ({eachComment, userThatCommented, user}) {
    return(
        <div className='comment-blurb'>
            <h4>{eachComment.content}</h4>
            <h6>{userThatCommented}</h6>
        </div>
    )
}

export default UserCommentCard;