import React from 'react'
import { SelectGraphicDisplay } from '../SelectGraphicDisplay'
import { SelectCollectionDisplay } from '../SelectCollectionDisplay'
import { Bars } from '../../../../../components/Bars'

export const TwoDisplays = (props:any) => {
    return (
        <div className="container px-4 h-100" >
            <div className="row gx-5" style={{ height: '640px' }}>
                <SelectCollectionDisplay/>
                <SelectGraphicDisplay/>
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