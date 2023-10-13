import React, { useState,useEffect } from 'react'
import { Button } from '../../../../components/Button'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { Channel } from './Channel';

firebase.initializeApp({
  apiKey: "AIzaSyDcVvcqv2nvVUZGVpUHLWWKCX2u--5mDBk",
  authDomain: "softwaredev-7294b.firebaseapp.com",
  projectId: "softwaredev-7294b",
  storageBucket: "softwaredev-7294b.appspot.com",
  messagingSenderId: "42852679465",
  appId: "1:42852679465:web:ea117f829cecf7fbbb0138",
  measurementId: "G-KL2CWXRF1H"
})

const auth = firebase.auth();
const db = firebase.firestore();

export const Support = (props:any) => {
    const [user, setUser] = useState(() => auth.currentUser)
    const [initializing, setInitializing] = useState(true)
    useEffect(() => {
        const Unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                setUser(user)
            } else {
                setUser(null)
            }
            if (initializing){
                setInitializing(false)
            }
        })

        return Unsubscribe
    }, [])
    

    if(initializing) return <p>Loading..</p>

    const signInWithGoogle = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.useDeviceLanguage();
        try {
            await auth.signInWithPopup(provider);
        } catch (error) {
            console.log(error);
            
        }
    };

    const signOut = async() => {
        try {
            await firebase.auth().signOut();
        }catch(error){
            console.log(error);
            
        } 
    }


    return (
        <div >
            {user ? (
                <>
                <Button label={'Sign Out'} onClick={signOut}>Sign Out</Button>
                    <Channel user={user} db={db} />
                </>
            ) : (<Button label={'Sign in'} onClick={signInWithGoogle} />)}
            
        </div>
    )
}
