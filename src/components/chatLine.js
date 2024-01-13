import React, { useEffect, useRef, useState } from 'react';
import SignOut from './chatSignOut';
import { auth, db } from '../chatfirebase';
import SendMessage from './chatSendMessage';

function Line() {
    const scroll = useRef();
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        db.collection("messages")
        .orderBy("createdAt")
        .limit(50)
        .onSnapshot((snapshot) => {
            setMessages(snapshot.docs.map((doc) => doc.data()));
        });
    }, []);
    return (
        <div>
            {console.log(messages)}
            <SignOut />
            <div className='msgs'>
                {messages.map(({id, text, photoURL, uid}) => (
                    <div key={id}>
                        <div className={`msg ${uid === auth.currentUser.uid ? "sent" : "received"}`}>
                            <img src={photoURL} alt='' />
                            <p>{text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <SendMessage scroll={scroll} />
            <div ref={scroll}></div>
        </div>
    );
}

export default Line;