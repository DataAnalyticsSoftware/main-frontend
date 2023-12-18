import React, { useContext } from 'react'
import { CSVForm } from '../CSVForm'
import { CSVTable } from '../CSVTable'
import { CSVContext } from '../../context/CSVContext'

export const CSVContainer = () => {
    return <div style={{marginLeft:'16px', marginRight:'16px'}}>
                <CSVForm />
                <br />
                 <CSVTable /> 
            </div>
}