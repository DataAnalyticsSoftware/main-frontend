import React from 'react'
import { PricingTableComponentDashboard } from '../PricingTable'



export const ContentComponent = (props) => {
    /*ESTE COMPONENTE SERÁ LA CARD QUE SE PINTARA EN TODA LA DASHBOARD, PENSAR EN COMO PLANTEARLA PARA HACERLA DINÁMICA */
    return (
        <div class='text-left mt-5 '>
            <h2 style={{ marginLeft: '88px' }}>Choose Your Plan</h2>
            <p style={{ marginLeft: '88px' }}>You can change your plan anytime. Cancel before 27 Jun to avoid charges.</p>

            <div style={{ marginTop: '112px' }}>
                <PricingTableComponentDashboard />
            </div>


        </div>
    )
}