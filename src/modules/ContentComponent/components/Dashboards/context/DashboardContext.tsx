import React, { createContext, useState } from 'react'

interface IDashboardContext {
    sectionId: string | null
    openModal: boolean
    searchTrigger: boolean
    setSectionId: React.Dispatch<React.SetStateAction<string | null>>
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
    setSearchTrigger: React.Dispatch<React.SetStateAction<boolean>>
    resetDashboardContext: () => void
}

const initialValues: IDashboardContext = {
    openModal: false,
    searchTrigger: true,
    sectionId: null,
    setOpenModal: () => {},
    setSearchTrigger: ()=>{},
    setSectionId: () => {},
    resetDashboardContext: () => {}
}

export const DashboardContext = createContext<IDashboardContext>(initialValues)

export const DashboardContextProvider = ({children}: any): JSX.Element => {

    const [ sectionId, setSectionId ] = useState<string | null>(initialValues.sectionId)
    const [ openModal, setOpenModal ] = useState<boolean>(initialValues.openModal)
    const [ searchTrigger, setSearchTrigger ] = useState<boolean>(initialValues.searchTrigger)

    const resetDashboardContext = () => {
        setSectionId(initialValues.sectionId)
        setOpenModal(initialValues.openModal)
        setSearchTrigger(initialValues.searchTrigger)
    }

    const valueContext: IDashboardContext = {
        openModal,
        searchTrigger,
        sectionId,
        setOpenModal,
        setSearchTrigger,
        setSectionId,
        resetDashboardContext
    }

    return <DashboardContext.Provider value={valueContext}>
        {children}
    </DashboardContext.Provider>
}