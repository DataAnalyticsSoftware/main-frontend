import React from 'react'
import DashboardContextProvider from './context/DashboardContext'
import { SideMenuComponent } from '../../modules/SideMenuComponent'
import { TopBarDashboardPage } from '../../modules/TopBarDashboardPage'
import { ContentComponent } from '../../modules/ContentComponent'

export const DashboardContainer = (props:any) => {
    return (
        <DashboardContextProvider>
            <div >
                <div className="container-fluid">
                    <div className="row">
                        <SideMenuComponent />
                        <div className="col offset-3" style={{ backgroundColor: '#ededed', height: '100vh', width: '100vh' }} id="main">
                            <TopBarDashboardPage />
                            <ContentComponent />
                        </div>
                    </div>
                </div>
            </div>
        </DashboardContextProvider>
    )
}