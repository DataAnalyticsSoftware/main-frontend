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
            <p style={{marginTop:'10px', fontWeight:'700'}}>{text}</p>
            <div>
                {createdAt?.seconds ? (
                    <span style={{fontSize:'12px'}}>
                        {formatRelative(new Date(createdAt.seconds * 1000), new Date())}
                    </span>
                ) : null}
            </div>
           
        </div>
    )
}
export default Message
