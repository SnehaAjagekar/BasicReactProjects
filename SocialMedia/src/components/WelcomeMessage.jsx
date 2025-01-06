const WelcomeMessage = ({onGetPostsClick}) => {
    return (
    <center className="welcome-message">
        <h3 >There are no posts</h3>
        <button type="button" onClick={onGetPostsClick} className="btn btn-primary">
            Get posts from server
        </button>
    </center>
    )
}

export default WelcomeMessage;