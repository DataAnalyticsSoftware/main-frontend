import React, { createContext, useState } from 'react'

interface IDashboardContext {
    sectionId: string | null
    openModal: boolean
    searchTrigger: boolean
    setSectionId: React.Dispatch<React.SetStateAction<string | null>>
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
    setSearchTrigger: React.Dispatch<React.SetStateAction<boolean>>
    resetDashboardContext: () => void
    step: number
    setStep: React.Dispatch<React.SetStateAction<number>>
}

const initialValues: IDashboardContext = {
    openModal: false,
    searchTrigger: true,
    sectionId: null,
    setOpenModal: () => {},
    setSearchTrigger: ()=>{},
    setSectionId: () => {},
    resetDashboardContext: () => {},
    step: 0,
    setStep: () => {}
}

export const DashboardContext = createContext<IDashboardContext>(initialValues)

export const DashboardContextProvider = ({children}: any): JSX.Element => {

    const [ sectionId, setSectionId ] = useState<string | null>(initialValues.sectionId)
    const [ openModal, setOpenModal ] = useState<boolean>(initialValues.openModal)
    const [ searchTrigger, setSearchTrigger ] = useState<boolean>(initialValues.searchTrigger)
    const [ step, setStep ] = useState<number>(initialValues.step)
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
        resetDashboardContext,
        step,
        setStep
    }

    return <DashboardContext.Provider value={valueContext}>
        {children}
    </DashboardContext.Provider>
}