import React from 'react'
import { Button } from '../../../../components/Button'
import ScrollToElementButton from '../../../../utils/index';

export const TopBarComponent = (props:any) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light mr-auto align-middle" style={{position: 'absolute'}}>
            <a className="navbar-brand " style={{ marginLeft: '64px' }} href="#">SOFTWARE DEV</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end " style={{ marginRight: '64px' }} id="navbarNav">
                <ul className="navbar-nav d-flex flex-row align-items-center">
                    <li className="nav-item ml-4">
                        <ScrollToElementButton targetId="aboutUs" label="About Us" classNameName="custom-button" />
                    </li>
                    <li className="nav-item ml-4">
                        <ScrollToElementButton targetId="functions" label="Functions" classNameName="custom-button" />
                    </li>
                    <li className="nav-item ml-4">
                        <ScrollToElementButton targetId="pricingTable" label="Pricing" classNameName="custom-button" />
                    </li>
                    <li className="nav-item ml-4">
                        <a className="nav-link" href="#">
                            <Button label={'Contact Us'} />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}