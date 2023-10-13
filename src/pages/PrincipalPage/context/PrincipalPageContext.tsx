import React, { createContext, useContext, useEffect, useState } from 'react'
import { IPrincipalPageContext, IPrincipalPageData } from "./type"
import { initialValue } from "./initialValues"
import { GenericContext } from "../../../context/GenericContext"
import { principalPageService } from '../../../services/principalPageService'

export const PrincipalPageContext = createContext<IPrincipalPageContext>(initialValue)

export default function PrincipalPageContextProvider({ children }: any) {

    const [data, setData] = useState<IPrincipalPageData[]>([])

    const { webDataNetsRequest } = useContext(GenericContext)
    const { getInformation } = principalPageService(webDataNetsRequest)

    useEffect(() => {
        getInformation()
         .then( response =>{
            setData(response)
        })
    }, [])

    const contextValue: IPrincipalPageContext = {
        data
    }
    
    return (
        <PrincipalPageContext.Provider value={contextValue}>
            {children}
        </PrincipalPageContext.Provider>
        )
}