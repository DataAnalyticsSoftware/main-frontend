import React from 'react'
import { ROUTES_DASHBOARD } from "./constants"
import { DisplayLayout } from './components/DisplayLayout'
import { DataImport } from './components/DataImport'
import { Collections } from './components/Collections'
import { PricingTableComponentDashboard } from './components/PricingTable'
import { Support } from './components/Support'

export const renderPage = (route: string): JSX.Element => {
    const RENDER_SECTIONS = {
        [ROUTES_DASHBOARD.HOME]: <div>Home</div>,
        [ROUTES_DASHBOARD.DASHBOARD]: <DisplayLayout/>,
        [ROUTES_DASHBOARD.DATAIMPORT]: <DataImport />,
        [ROUTES_DASHBOARD.COLLECTIONS]: <Collections/>,
        [ROUTES_DASHBOARD.UPGRADE]: <PricingTableComponentDashboard />,
        [ROUTES_DASHBOARD.SUPPORT]: <Support />,
        [ROUTES_DASHBOARD.ABOUT]: <div>About</div>,

    }

    return RENDER_SECTIONS[route] || <></>
}