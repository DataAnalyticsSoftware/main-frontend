import React, { useContext } from 'react'
import { CSVForm } from '../CSVForm'
import { CSVTable } from '../CSVTable'
import { CSVContext } from '../../context/CSVContext'

export const CSVContainer = () => {

    const { handleFormSubmit } = useContext(CSVContext)

    return <form onSubmit={handleFormSubmit}>
                <CSVForm />
                <br />
                <CSVTable />
            </form>
}