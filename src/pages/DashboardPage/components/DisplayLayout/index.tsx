import React from 'react'
import { Bars } from '../Bars'

export const DisplayLayout = (props:any) => {
    return (
        <div className='container w-100 mt-5' style={{ borderRadius: '10px', backgroundColor: 'white', height: '600px', padding: '24px' }}>
            <Bars />
        </div>
    )
}