import React from 'react'
import { Bars } from '../../Bars'

export const OneDisplay = (props:any) => {
    return (
        <div className='container w-100 mt-3' style={{ borderRadius: '10px', backgroundColor: 'white', height: '620px', padding: '24px' }}>
            <Bars />
        </div>
    )
}