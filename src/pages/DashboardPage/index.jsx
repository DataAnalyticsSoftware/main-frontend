import React from 'react'
import { DashboardPage } from './components/DashboardPage'
import DashboardContextProvider from './context/DashboardContext'

export const DashboardContainer = (props) => {
    return (
        <DashboardContextProvider>
            <div >
                <DashboardPage />
            </div>
        </DashboardContextProvider>
    )
}