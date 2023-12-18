import React from 'react'
import DashboardContextProvider from './context/DashboardContext'
import { SideMenuComponent } from '../../modules/SideMenuComponent'
import { TopBarDashboardPage } from '../../modules/TopBarDashboardPage'
import { ContentComponent } from '../../modules/ContentComponent'

export const DashboardContainer = (props:any) => {
    return (
        <DashboardContextProvider>
            <div className="dashboard-container" style={{width:'100%', backgroundColor:'#fefeff'}}>
                <div className="container-fluid">
                    <div className="row">
                        <SideMenuComponent />
                        <div style={{ backgroundColor: '#ededed', height: '100vh', width: 'calc( 100% - 221px )', marginLeft: '221px' }} id="main">
                            <TopBarDashboardPage />
                            <ContentComponent />
                        </div>
                    </div>
                </div>
            </div>
        </DashboardContextProvider>
    )
}