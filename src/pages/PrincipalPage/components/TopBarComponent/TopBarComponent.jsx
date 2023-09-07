import React from 'react'
import { Button } from '../../../../components/Button/Button'

export const TopBarComponent = (props) => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light mr-auto align-middle">
            <a class="navbar-brand " style={{ marginLeft: '64px' }} href="#">SOFTWARE DEV</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end " style={{ marginRight: '64px' }} id="navbarNav">
                <ul class="navbar-nav d-flex flex-row align-items-center">
                    <li class="nav-item ml-4">
                        <a class="nav-link" href="#">Functions <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item ml-4">
                        <a class="nav-link" href="#">About Us</a>
                    </li>
                    <li class="nav-item ml-4">
                        <a class="nav-link" href="#">Pricing</a>
                    </li>
                    <li class="nav-item ml-4">
                        <a class="nav-link" href="#">Enter</a>
                    </li>
                    <li class="nav-item ml-4">
                        <a class="nav-link" href="#">
                            <Button label={'Contact Us'} />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}