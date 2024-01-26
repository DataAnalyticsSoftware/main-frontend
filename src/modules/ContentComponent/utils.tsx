import React, { useContext } from 'react'
import { ROUTES_DASHBOARD } from "./constants"
import { DataImport } from './components/DataImport'
import { Collections } from './components/Collections'
import { PricingTableComponent } from './components/PricingTable'
import { Support } from './components/Support'
import { DataManagement } from './components/DataManagement'
import { Dashboards } from './components/Dashboards'
import { DashboardContext } from '../../pages/DashboardPage/context/DashboardContext'
import { Campaigns } from './components/Campaigns'

export const renderPage = (route: string): JSX.Element => {
    
    const { pricing } = useContext(DashboardContext)

    const RENDER_SECTIONS = {
        [ROUTES_DASHBOARD.HOME]: <div>Home</div>,
        [ROUTES_DASHBOARD.DASHBOARD]: <Dashboards/>,
        [ROUTES_DASHBOARD.DATAIMPORT]: <DataImport />,
        [ROUTES_DASHBOARD.COLLECTIONS]: <Collections/>,
        [ROUTES_DASHBOARD.UPGRADE]: <PricingTableComponent pricing={pricing}/>,
        [ROUTES_DASHBOARD.SUPPORT]: <Support />,
        [ROUTES_DASHBOARD.ABOUT]: <div>About</div>,
        [ROUTES_DASHBOARD.DATAMANAGEMENT]: <DataManagement/>,
        [ROUTES_DASHBOARD.CAMPAIGNS]: <Campaigns/>

    }
    
    return RENDER_SECTIONS[route] || <></>
}