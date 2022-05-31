function UserCommentCard ({eachComment}) {

    
    const userThatCommented = eachComment.user.first_name
    return(
        <div>
            <h5>{eachComment.content}</h5>
            <span>{userThatCommented}</span>
        </div>
    )

}

export default UserCommentCard;