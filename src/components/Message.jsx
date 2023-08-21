function Message(props) {
    console.log(props)
    return(
        <p className="message">
        {props.message}
        {/* On December 7th, we will be hosting a #webinar that will introduce you to
        #SQL! Are you ready? 🚀 */}
      </p>
    )
    
}

export default Message;
