import React from 'react'
import { Bars } from '../../Bars'

export const OneDisplay = (props:any) => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>

                </div>
                <div className='w-100 mt-3 col' style={{ borderRadius: '10px', backgroundColor: 'white', height: '620px', padding: '24px' }}>
                    <Bars />
                </div>
            </div>
            
        </div>
    )
}