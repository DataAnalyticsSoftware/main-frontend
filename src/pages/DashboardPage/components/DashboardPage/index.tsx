import React from 'react'
import { StickySideBarComponent } from '../StickySideBarComponent'
import { TopBarDashboardPage } from '../TopBarDashboardPage';
import { ContentComponent } from '../ContentComponent/index';


export const DashboardPage = (props: any) => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <StickySideBarComponent />
                    <div className="col offset-3" style={{
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





