import React  from 'react'
import { AddDashboard } from './components/AddDashboard'
import { Sections } from './components/Sections'
import { DashboardContextProvider } from './context/DashboardContext'

export const Dashboards = (): JSX.Element => {
    
    return (
    <>
        <DashboardContextProvider>
            <AddDashboard/>
            <Sections/>
        </DashboardContextProvider>
    </>)
}