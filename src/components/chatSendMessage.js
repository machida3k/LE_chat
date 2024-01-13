import React, { useState } from 'react';
import { db, auth } from '../chatfirebase';
import firebase from "firebase/compat/app";
import { Input } from '@mui/material';
import SendIcon from "@mui/icons-material/Send";
import image from "./AdobeStock_297158540.jpeg";

function SendMessage({scroll}) {
    const [message, setMessage] = useState("");
    function sendMessage(e) {
        e.preventDefault();

        const {uid, photoURL} = auth.currentUser;

        db.collection("messages").add({
            text: message,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setMessage("");
        scroll.current.scrollIntoView({behavior: "smooth"});
    }
    return (
        <div>
            <form onSubmit={sendMessage}>
                <div className='sendMsg'>
                    <div className='sendMsgTop'>
                        <img src={image} className='kondate' />
                        <div>
                            <p>根菜と塩麴を使った、腸を労わる献立 10品</p>
                            <p>11,000円（税込）</p>
                        </div>
                        <p className="order">注文確定</p>
                    </div>
                    <div className='sendMsgDown'>
                        <Input
                            style={{
                                width: "78%",
                                fontSize: "20px",
                                fontWeight: "550",
                                marginLeft: "5px",
                                marginBottom: "-3px",
                                marginTop: "10px",
                            }}
                            placeholder='メッセージを入力'
                            type='text'
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                        />
                        <SendIcon className="sendIcon" style={{ color: "#7AC2FF", marginLeft: "20px", cursor: "pointer" }} onClick={sendMessage} />
                    </div>
                </div>
            </form>
        </div>
    );
}

export default SendMessage;