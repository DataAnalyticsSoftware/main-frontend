import React from 'react'
import { Bars } from '../../Bars'

export const TwoDisplays = (props:any) => {
    return (
        <div className='row' style={{ height:'620px'}}>
            <div className='container w-100 mt-3 col-md-6 h-100' style={{ borderRadius: '10px', backgroundColor: 'white', padding: '24px' }}>
                <Bars />
            </div>
            <div className='container w-100 mt-3 col-md-6 h-100 ' style={{ borderRadius: '10px', backgroundColor: 'white', padding: '24px' }}>
                <Bars />
            </div>
        </div>
    )
}