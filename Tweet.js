const Tweet = (props) => {
    return (<div className="twe"> 
    <h1 className="username"> Tweet by {props.userName}   </h1>
    <h2 className="date"> Name :  {props.Name}    Date: {props.date}  </h2>
    <p> Texto del tweet  </p>

    </div>)
}