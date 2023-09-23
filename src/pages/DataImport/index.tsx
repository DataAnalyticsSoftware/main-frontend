import React from 'react'
import CSVViewer from './Paparse'

export const DataImport = (props:any) => {
    return (
        <div >
            <h1>Drop .CSV* file</h1>
            <CSVViewer/>
        </div>
    )
}
