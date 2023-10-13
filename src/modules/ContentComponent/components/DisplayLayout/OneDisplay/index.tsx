import React, { useContext } from 'react'
import { SelectGraphicDisplay } from '../SelectGraphicDisplay';
import { SelectCollectionDisplay } from '../SelectCollectionDisplay';
import { DashboardContext } from '../../../../../pages/DashboardPage/context/DashboardContext';
import { Bars } from '../../../../../components/Bars';

export const OneDisplay = (props: any) => {
    const { displayGraphic, setDisplayGraphic } = useContext(DashboardContext);
    
    const handleDisplayClick = (display: string) => { 
        setDisplayGraphic(display);
};
    return (
        <div className='container' style={{display:'flex',flexDirection:'column'}}>         
            <div className='row'>
                <div className='pt-3 col' style={{ borderRadius: '10px', backgroundColor: 'white', height: '620px', padding: '24px' }}>
                <div className='display' style={{zIndex:500}}>
                    <SelectCollectionDisplay/>
                    <SelectGraphicDisplay/>
                </div>
                    <Bars />
                </div>
            </div>
            
        </div>
    )
}