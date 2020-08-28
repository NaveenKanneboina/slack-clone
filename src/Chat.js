import React, { useState, useEffect } from 'react';
import "./Chat.css";
import { useParams } from "react-router-dom";
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import db from "./firebase";
import Messages from "./Messages"

function Chat() {
    const { roomId } = useParams();
    const [channelDetails, setchannelDetails] = useState(null);
    const [messageDetails, setmessageDetails] = useState([]);

    useEffect(() => {
        if(roomId){
            db.collection('rooms')
            .doc(roomId)
            .onSnapshot((snapshot)=> setchannelDetails(snapshot.data()))
        }

        db.collection('rooms')
            .doc(roomId)
            .collection('messages')
            .orderBy('timestamp', 'asc')
            .onSnapshot((snapshot) => 
                setmessageDetails(snapshot.docs.map(doc => doc.data()))
            );
    }, [roomId]);

    console.log(messageDetails)

    return (
        <div className="chat">
            <div className="chat_header">
                <div className="chat_headerLeft">
                    <h4 className="chat_channelName">
                        <strong># {channelDetails?.name}</strong>
                        <StarBorderOutlinedIcon/>
                    </h4>
                </div>
                <div className="chat_headerRight">
                    <p>
                        <InfoOutlinedIcon/> Details
                    </p>
                </div>
            </div>
            <div className="chat_message">
                {
                    messageDetails.map(message =>(
                        <Messages
                        message= {message.message}
                        timestamp={message.timestamp}
                        user={message.user}
                        userImage={message.userimage} />
                    ))
                
                }
            </div>
        </div>
    )
}

export default Chat
