import React, { useContext } from 'react'
import { PricingTableComponentDashboard } from '../PricingTable'
import { DashboardContext } from '../../context/DashboardContext';

export const ContentComponent = (props) => {
    const { infoContainer, menuSelected } = useContext(DashboardContext)

    return (
        <div class='text-left mt-5 '>
            {infoContainer?.map((value =>
                value.name === menuSelected ?
                    <div key={value.name}>
                        <h2 style={{ marginLeft: '88px' }}>{value.title}</h2>
                        <p style={{ marginLeft: '88px' }}>{value.text}</p>
                    </div> : ''
            ))}
            {menuSelected === 'Upgrade' ? <div style={{ marginTop: '112px' }}>
                <PricingTableComponentDashboard />
            </div> : ''}
        </div>
    )
}