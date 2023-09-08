import React from 'react'
import styles from './styles.module.scss'
import { StickySideBarComponent } from '../StickySideBarComponent'
import { TopBarDashboardPage } from '../TopBarDashboardPage';


export const DashboardPage = (props) => {
    return (
        <>
            <div class="container-fluid">
                <div class="row">
                    <StickySideBarComponent />
                    <div class="col offset-3" style={{ backgroundColor: '##ededed' }} id="main">
                        <TopBarDashboardPage />
                    </div>
                </div>
            </div>
        </>
    )
}





