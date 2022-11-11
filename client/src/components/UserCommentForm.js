function UserCommentForm ({userCommentSubmit, organizerCommentSubmit, setCommentText, commentText, currentUser}) {
    const disableSubmit = commentText.length === 0;

    return(
        <div>
            <form className='comment-form' onSubmit={currentUser.is_organizer ? organizerCommentSubmit : userCommentSubmit}>
                {currentUser.is_organizer ? (<textarea className='comment-textarea' type='text' onChange={(e)=>setCommentText(e.target.value)} value={commentText} ></textarea>) : (<textarea className='comment-textarea' type='text' onChange={(e)=>setCommentText(e.target.value)} value={commentText} ></textarea>)}
                
                <br></br>
                {currentUser.is_organizer ? (<button type='submit' disabled={disableSubmit}>Submit</button>) : (<button type='submit' disabled={disableSubmit}>Submit</button>)}
                
            </form>
        </div>
    )

}

export default UserCommentForm; 