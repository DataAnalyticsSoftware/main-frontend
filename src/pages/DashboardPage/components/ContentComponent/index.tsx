import React, { useContext } from 'react'
import { PricingTableComponentDashboard } from '../PricingTable'
import { DashboardContext } from '../../context/DashboardContext';
import { DisplayLayout } from '../DisplayLayout';
import { ChooseDisplay } from '../ButtonDisplays';
import { DataImport } from '../../../DataImport';

export const ContentComponent = (props:any) => {
    const { infoContainer, menuSelected, displaySelected, setDisplaySelected } = useContext(DashboardContext)

    return (
        <div className='container text-left '>
            {infoContainer?.map((value =>
                value.name === menuSelected ?
                    <div key={value.name} className='row'>
                    <div key={value.name} className='col-md-10' style={{ padding: '5px', paddingLeft: '40px' }}>
                        <h2 style={{ marginLeft: 'auto' }}>{value.title}</h2>
                        <p style={{ marginLeft: 'auto' }}>{value.text}</p>
                        </div>
                        {menuSelected==='Dashboard'? <div key={value.name} className='col-md-2' style={{ display: 'grid', alignContent: 'center' }}>
                            <ChooseDisplay props={{ displaySelected, setDisplaySelected }} />
                        </div>:''}        
                    </div>
                    : ''
            ))}
            {menuSelected === 'Upgrade' ? <div style={{ marginTop: '4px' }}>
                <PricingTableComponentDashboard />
            </div> : ''}
            {menuSelected === 'Dashboard' ? <div><DisplayLayout props={{ displaySelected, setDisplaySelected }} /></div> : ''}
            {menuSelected === 'Data Import' ? <div><DataImport/></div> : ''}

        </div>
    )
}