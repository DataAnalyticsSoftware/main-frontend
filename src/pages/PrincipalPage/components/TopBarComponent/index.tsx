import React from 'react'
import ScrollToElementButton from '../../../../utils/index';
import { ButtonDas } from '../../../../components/ButtonDas/index';
import { useNavigate } from "react-router-dom"
import { motion } from 'framer-motion';

export const TopBarComponent = (props:any) => {
    const navigate = useNavigate()
    return (
            <nav className="navbar navbar-expand-lg navbar-light mr-auto align-middle" style={{position: 'fixed', zIndex: '5', width:'100vw', paddingLeft: '100px', paddingRight: '100px', paddingTop: '30px', backdropFilter: 'blur(6px)'}}>
                <div style={{display: 'flex', width: '100%', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <a className="navbar-brand " href="#">SOFTWARE DEV</a>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <ScrollToElementButton targetId="functions" label="Functions" classNameName="custom-button" />
                        <ScrollToElementButton targetId="aboutUs" label="About Us" classNameName="custom-button" />
                        <ScrollToElementButton targetId="pricingTable" label="Pricing" classNameName="custom-button" />
                        <ScrollToElementButton targetId="pricingTable" label="Enter" classNameName="custom-button" />
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
                        <ButtonDas text='Contact Us' variant='outlined' />
                        <ButtonDas text={'Sign Up'} variant='contained' onClick={() => {navigate('/SignUp', { replace: true })}} />
                    </div>
                </div>
            </nav>
    )
}

