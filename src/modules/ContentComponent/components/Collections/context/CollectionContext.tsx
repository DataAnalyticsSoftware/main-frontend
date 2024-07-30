import React, { createContext, useState } from 'react'
import { IDataCollection } from '../components/CollectionList/type'

interface ICollectionContext {
    openModal: boolean
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
    isEdit: boolean
    setIsEdit: React.Dispatch<React.SetStateAction<boolean>>
    dataEdit: IDataCollection | null
    setDataEdit: React.Dispatch<React.SetStateAction<IDataCollection | null>>,
    search: boolean
    setSearch: React.Dispatch<React.SetStateAction<boolean>>
    colOfCollections: number
    setColOfCollections: React.Dispatch<React.SetStateAction<number>>
}

const initialValues: ICollectionContext = {
    openModal: false,
    dataEdit: null,
    isEdit: false,
    search: true,
    setDataEdit: () => {},
    setIsEdit: () => {},
    setOpenModal: () => {},
    setSearch: () => {},
    colOfCollections:0,
    setColOfCollections:() => {},
}

export const CollectionContext = createContext<ICollectionContext>(initialValues)

export const CollectionContextProvider = ({children}: any): JSX.Element => {

    const [ openModal, setOpenModal ] = useState<boolean>(false)
    const [ isEdit, setIsEdit ] = useState<boolean>(false)
    const [ dataEdit, setDataEdit ] = useState<IDataCollection | null>(null)
    const [search, setSearch ] = useState<boolean>(true)
    const [ colOfCollections, setColOfCollections ] = useState<number>(0)

    const contextValues = {
        openModal, setOpenModal, isEdit, setIsEdit, dataEdit, setDataEdit, setSearch, search, colOfCollections, setColOfCollections 
    }

    return (
        <CollectionContext.Provider value={contextValues}>
            {children}
        </CollectionContext.Provider>
    )
}