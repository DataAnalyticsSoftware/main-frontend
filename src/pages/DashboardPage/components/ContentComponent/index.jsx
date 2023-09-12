import React, { useContext } from 'react'
import { PricingTableComponentDashboard } from '../PricingTable'
import { DashboardContext } from '../../context/DashboardContext';

export const ContentComponent = (props) => {
    const { infoContainer, menuSelected } = useContext(DashboardContext)

    return (
        <div class='container text-left '>
            {infoContainer?.map((value =>
                value.name === menuSelected ?
                    <div key={value.name} style={{ padding: '5px', paddingLeft: '40px' }}>
                        <h2 style={{ marginLeft: 'auto' }}>{value.title}</h2>
                        <p style={{ marginLeft: 'auto' }}>{value.text}</p>
                    </div> : ''
            ))}
            {menuSelected === 'Upgrade' ? <div style={{ marginTop: '4px' }}>
                <PricingTableComponentDashboard />
            </div> : ''}
        </div>
    )
}