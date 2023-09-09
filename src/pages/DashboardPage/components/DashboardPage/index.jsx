import React from 'react'
import styles from './styles.module.scss'
import { StickySideBarComponent } from '../StickySideBarComponent'
import { TopBarDashboardPage } from '../TopBarDashboardPage';
import { ContentComponent } from './../ContentComponent/index';


export const DashboardPage = (props) => {
    return (
        <>
            <div class="container-fluid">
                <div class="row">
                    <StickySideBarComponent />
                    <div class="col offset-3" style={{
                        backgroundColor: '#ededed', height: '100vh', width: '100vh'
                    }} id="main">
                        <TopBarDashboardPage />
                        <ContentComponent />
                    </div>
                </div>
            </div>
        </>
    )
}





