import React from 'react'
import { Bars } from '../../Bars'

export const TwoDisplays = (props:any) => {
    return (
        <div className="container px-4 h-100" >
            <div className="row gx-5" style={{height:'640px'}}>
                <div className="col">
                <div className="p-3 border bg-light h-100"><Bars /></div>
                </div>
                <div className="col">
                <div className="p-3 border bg-light h-100"><Bars /></div>
                </div>
            </div>
        </div>

    )
}