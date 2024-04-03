import React, { useContext } from 'react'
import DashboardContextProvider from './context/DashboardContext'
import { SideMenuComponent } from '../../modules/SideMenuComponent'
import { TopBarDashboardPage } from '../../modules/TopBarDashboardPage'
import { ContentComponent } from '../../modules/ContentComponent'
import { ToastDas } from '../../components/ToastDas'
import { GenericContext } from '../../context/GenericContext'
import { UserProfile } from '../UserProfile'

export const DashboardContainer = (props:any) => {
    const { openToast, messageToast, setOpenToast, openProfile } = useContext(GenericContext)
    return (
        <DashboardContextProvider>
           {openProfile?<UserProfile/>:''}
            <div className="dashboard-container" style={{width:'100%', backgroundColor:'#fefeff'}}>
                <div className="container-fluid">
                    <div className="row">
                        <SideMenuComponent />
                        <div style={{ backgroundColor: 'rgba(255, 255, 255, 1)',height:'105px', width: 'calc( 100% - 221px )', marginLeft: '221px' }} id="main">
                            <TopBarDashboardPage />
                        </div>
                        <div style={{ backgroundColor: '#f4f5f4', height: '89vh', width: 'calc( 100% - 221px )', marginLeft: '221px' }} id="main">
                        <ContentComponent />
                        </div>
                    </div>
                </div>
                <ToastDas message={messageToast} open={openToast} onClose={() => setOpenToast(false)}/>
            </div>
        </DashboardContextProvider>
    )
}