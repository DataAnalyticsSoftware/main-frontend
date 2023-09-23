import React from 'react'
import { Bars } from '../../Bars'

export const FiveDisplays = (props:any) => {
    return (
         <div className="row" style={{height:'680px'}}>    
            <div className="col-md-6" style={{height:'225px'}}>
                <div className="row" >
                    <div className="col-md-12" style={{height:'225px'}}>
                        <div className="well h-100" style={{ borderRadius: '10px', backgroundColor: 'white',  padding: '16px' }}><Bars/></div>
                    </div>
                </div>
                <div className="row" style={{height:'225px'}}>
                    <div className="col-md-12 pt-2" > 
                        <div className="well h-100" style={{ borderRadius: '10px', backgroundColor: 'white', padding: '16px' }}><Bars/></div>
                    </div>
                </div>
            </div>                
            <div className="col-md-6 pb-5" style={{height:'225px'}}>
                <div className="row" >
                    <div className="col-md-12" style={{height:'225px'}}>
                        <div className="well h-100" style={{ borderRadius: '10px', backgroundColor: 'white',  padding: '16px' }}><Bars/></div>
                    </div>
                </div>
                <div className="row" style={{height:'225px'}}>
                    <div className="col-md-12 pt-2" > 
                        <div className="well h-100" style={{ borderRadius: '10px', backgroundColor: 'white', padding: '16px' }}><Bars/></div>
                    </div>
                </div>
            </div>
            <div className="col" style={{marginTop:'245px'}} > 
                <div className="well h-100" style={{ borderRadius: '10px', backgroundColor: 'white', padding: '16px' }}><Bars/></div>
            </div>
        </div>
    )
}