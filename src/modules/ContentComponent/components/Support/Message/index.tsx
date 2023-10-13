import { formatRelative } from 'date-fns';
import firebase from 'firebase/compat/app';
import React, { useContext,useEffect, useState } from 'react'

const Message = ({
    createdAt,
    text = '',
    displayName = '',
    photoURL='',
}:any) => {
    return (
        <div className='flex'>
            <div style={{display:'flex', alignItems:'flex-end'}}>
                {photoURL ? (
                <img src={photoURL} alt='Avatar' width={45} height={45} className='rounded-circle mr-3'   />
                ) : null}
                {displayName ? <div><p style={{fontSize:'18px', paddingTop:'10px'}}>{displayName}</p> </div>: null}
            </div> 
            <div>
                {createdAt?.seconds ? (
                    <span style={{fontSize:'12px'}}>
                        {formatRelative(new Date(createdAt.seconds * 1000), new Date())}
                    </span>
                ) : null}
            </div>
           
            <p style={{marginTop:'10px', fontWeight:'700'}}>{text}</p>
        </div>
    )
}
export default Message
