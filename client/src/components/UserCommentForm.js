function UserCommentForm ({handleSubmit, setCommentText, commentText, currentUser}) {
    const disableSubmit = commentText.length === 0;

    return(
        <div>
            <form className='comment-form' onSubmit={handleSubmit}>
                {currentUser.is_organizer ? (<div className="ask-to-sign-in">Please sign into user account to leave comments on this page. </div>) : (<textarea className='comment-textarea' type='text' onChange={(e)=>setCommentText(e.target.value)} value={commentText} ></textarea>)}
                
                <br></br>
                {currentUser.is_organizer ? (<></>) : (<button type='submit' disabled={disableSubmit}>Submit</button>)}
                
            </form>
        </div>
    )

}

export default UserCommentForm; 