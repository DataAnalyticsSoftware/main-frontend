import firebase from 'firebase/compat/app';
import React, { useContext,useEffect, useState } from 'react'
import Message from '../Message';
import './styles.css'
import { ButtonDas } from '../../../../../components/ButtonDas';

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
        <div style={{borderRadius:'14px'}} className="container-fluid">
            <div className="row">         
      <section style={{borderRadius:'14px'}} className="discussions">
        <div  className="discussion search">
          <div className="searchbar">
            <i className="fa fa-search" aria-hidden="true"></i>
            <input type="text" placeholder="Search..."></input>
          </div>
        </div>
        <div  className="discussion message-active">
          <div className="photo" >
            <div className="online"></div>
          </div>
          <div className="desc-contact">
            <p className="name">Megan Leib</p>
            <p className="message">9 pm at the bar if possible 😳</p>
          </div>
          <div className="timer">12 sec</div>
        </div>
      </section>
      <section  style={{height:'550px', overflowY:'scroll'}} className="chat chat-message-right pb-4">
        <div className="header-chat">
          <i className="icon fa fa-user-o" aria-hidden="true"></i>
          <p className="name">Megan Leib</p>
          <i className="icon clickable fa fa-ellipsis-h right" aria-hidden="true"></i>
        </div>
        <div className="messages-chat">

          <div className="message text-only">
            <p className="text"> What are you doing tonight ? Want to go take a drink ?</p>
          </div>
          <p className="time"> 14h58</p>

         
        {messages.map(message => (
            <div key={message.id} className="message text-only">
                <div key={message.id} className="response">
                    <p className="text" key={message.id}> <Message {...message}/></p>
                </div>
            </div>               
            ))
        }
        </div>
        <div className="footer-chat">
          <i className="icon fa fa-smile-o clickable"  aria-hidden="true"></i>
          <form onSubmit={handleOnSubmit}>
                    <input
                        className="write-message"
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
      </section>
            </div>
        </div>
    )
}
