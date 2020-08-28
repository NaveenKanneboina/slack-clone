import React from 'react';
import "./Messages.css";
function Messages({message,timestamp,user,userImage}) {
    return (
        <div className="message">
            <img src={userImage} alt=""/>
            <div className="message_info">
                <h4>
                    {user}<span>{new Date(timestamp?.toDate()).toLocaleString()}</span>
                </h4>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default Messages
