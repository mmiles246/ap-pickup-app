function UserCommentForm ({handleSubmit, setCommentText, commentText}) {
    const disableSubmit = commentText.length === 0;

    return(
        <div>
            <form className='comment-form' onSubmit={handleSubmit}>
                <textarea className='comment-textarea' type='text' onChange={(e)=>setCommentText(e.target.value)} value={commentText} ></textarea>
                <br></br>
                <button type='submit' disabled={disableSubmit}>Submit</button>
            </form>
        </div>
    )

}

export default UserCommentForm; 