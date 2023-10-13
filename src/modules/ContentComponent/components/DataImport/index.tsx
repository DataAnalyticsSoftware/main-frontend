import React from 'react'
import { CSVUpload } from './components/CSVUpload'

export const DataImport = () => {
    return (
        <div >
            <h1>Drop .CSV* file</h1>
            <CSVUpload/>
        </div>
    )
}
