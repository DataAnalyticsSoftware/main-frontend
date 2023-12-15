import React from 'react'
import { ROUTES_DASHBOARD } from "./constants"
import { DataImport } from './components/DataImport'
import { Collections } from './components/Collections'
import { PricingTableComponent } from './components/PricingTable'
import { Support } from './components/Support'
import { DataManagement } from './components/DataManagement'
import { Dashboards } from './components/Dashboards'

export const renderPage = (route: string): JSX.Element => {
    const RENDER_SECTIONS = {
        [ROUTES_DASHBOARD.HOME]: <div>Home</div>,
        [ROUTES_DASHBOARD.DASHBOARD]: <Dashboards/>,
        [ROUTES_DASHBOARD.DATAIMPORT]: <DataImport />,
        [ROUTES_DASHBOARD.COLLECTIONS]: <Collections/>,
        [ROUTES_DASHBOARD.UPGRADE]: <PricingTableComponent />,
        [ROUTES_DASHBOARD.SUPPORT]: <Support />,
        [ROUTES_DASHBOARD.ABOUT]: <div>About</div>,
        [ROUTES_DASHBOARD.DATAMANAGEMENT]: <DataManagement/>

    }
    
    return RENDER_SECTIONS[route] || <></>
}