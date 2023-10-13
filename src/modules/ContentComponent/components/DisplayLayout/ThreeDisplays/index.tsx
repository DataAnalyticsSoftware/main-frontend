import React from 'react'
import { Bars } from '../../../../../components/Bars'

export const ThreeDisplays = (props: any) => {
        return (
        <div className="row" style={{height:'650px'}}>    
            <div className="col-md-8" style={{height:'325px'}}>
                <div className="row" >
                    <div className="col-md-12" style={{height:'325px'}}>
                        <div className="well h-100" style={{ borderRadius: '10px', backgroundColor: 'white',  padding: '16px' }}><Bars/></div>
                    </div>
                </div>
                <div className="row" style={{height:'325px'}}>
                    <div className="col-md-12 pt-2" > 
                        <div className="well h-100" style={{ borderRadius: '10px', backgroundColor: 'white', padding: '16px' }}><Bars/></div>
                    </div>
                </div>
            </div>                
                <div className="col-md-4">
                    <div className="well h-100" style={{ borderRadius: '10px', backgroundColor: 'white', padding: '16px' }}><Bars/></div>
                </div>
        </div>
    )
}