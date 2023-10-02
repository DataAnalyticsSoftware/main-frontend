import React, { useContext } from 'react'
import { Bars } from '../../Bars'
import { useState } from 'react';
import { DashboardContext } from '../../../context/DashboardContext';
import { SelectGraphicDisplay } from '../../SelectGraphicDisplay';
import { SelectCollectionDisplay } from '../../SelectCollectionDisplay';

export const OneDisplay = (props: any) => {
    const { displayGraphic, setDisplayGraphic } = useContext(DashboardContext);
    
    const handleDisplayClick = (display: string) => { 
        setDisplayGraphic(display);
};
    return (
        <div className='container' style={{display:'flex',flexDirection:'column'}}>
            <div className='display'>
                    <SelectCollectionDisplay/>
                    <SelectGraphicDisplay/>
                </div>
            <div className='row'>
                
                <div className='pt-3 col' style={{ borderRadius: '10px', backgroundColor: 'white', height: '620px', padding: '24px' }}>
                    <Bars />
                </div>
            </div>
            
        </div>
    )
}