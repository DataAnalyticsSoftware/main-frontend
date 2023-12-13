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
                        <div style={{backgroundColor: '#fbfafb', height: '100vh', width: 'calc( 100% - 201px )', marginLeft: '201px' }} id="main">
                            <div style={{paddingTop:'4px',}}> <TopBarDashboardPage /></div>
                            <div><ContentComponent /></div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </DashboardContextProvider>
    )
}