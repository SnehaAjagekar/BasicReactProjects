const ErrorMessage = ({items}) => {
    
    return<>
    {items.length === 0 ? <h3>still hungry dude </h3> : null}
    </>
}

export default ErrorMessage;
