import React, { createContext, useState } from 'react'

interface ITableDataContext {
    rowsEdited: number[]
    setRowsEdited: React.Dispatch<React.SetStateAction<number[]>>
    rowIdToSave: number | null
    setRowIdToSave: React.Dispatch<React.SetStateAction<number | null>>
}

const initialValue = { rowsEdited: [], setRowsEdited: () => {}, rowIdToSave: null, setRowIdToSave: () => {}}

export const TableDataContext = createContext<ITableDataContext>(initialValue)

export default function TableDataContextProvider({children}: any) {
    const [ rowsEdited, setRowsEdited ] = useState<number[]>([])
    const [rowIdToSave, setRowIdToSave ] = useState<number | null>(null)

    const contextValue = {rowsEdited, setRowsEdited, rowIdToSave, setRowIdToSave}

    return (<TableDataContext.Provider value={contextValue}>
        {children}
    </TableDataContext.Provider>)
}