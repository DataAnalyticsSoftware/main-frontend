import firebase from 'firebase/compat/app';
import React, { useContext,useEffect, useState } from 'react'
import Message from '../Message';

export const Channel = ({user=null, db}:any) => {
    const [messages, setMessages] = useState<any[]>([])
    const [newMessage, setNewMessage] = useState<any[]>([])
    
    const { uid, displayName, photoURL } = user;

    useEffect(() => {
        if (db) {
            const unsubscribe = db
                .collection('messages')
                .orderBy('createdAt')
                .limit(100).onSnapshot((querySnapshot:any) => {
                    const data = querySnapshot.docs.map((doc:any) => ({
                        ...doc.data(),
                        id: doc.id
                    }))
                    setMessages(data)
                })                           
            return unsubscribe
        }
    }, [db])

    const handleOnChange = (e:any) => {
        setNewMessage(e.target.value)
    }

    const handleOnSubmit = (e:any) => {
        e.preventDefault();

        if (db) {
            db.collection('messages').add({
                text: newMessage,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                uid,
                displayName,
                photoURL
            })
        }
    }
    

    return (
        <>
            <ul className='list-unstyled' style={{height:'550px', overflow:'scroll'}}>
                {messages.map(message => (
                    <div key={message.id} className="chat-message-right pb-4">
                        <div key={message.id} className=''>
                                    <li key={message.id}><Message {...message} /></li>
                        </div>                    
                    </div>                
            ))
            }
            </ul>
            <div className='flex-grow-0 py-3 px-4 border-top'>
                <form onSubmit={handleOnSubmit}>
                    <input
                        type='text'
                        value={newMessage}
                        onChange={handleOnChange}
                        placeholder='Type your message here'
                    />
                    <button className='' type='submit' disabled={!newMessage}>
                        Send
                    </button>
                </form>
            </div>
            
        </>
        
    )
}