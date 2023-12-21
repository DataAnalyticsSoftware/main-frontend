import React, { createContext, useContext, useEffect, useState } from 'react'
import { IPrincipalPageContext, IPrincipalPageData } from "./type"
import { initialValue } from "./initialValues"
import { GenericContext } from "../../../context/GenericContext"
import { principalPageService } from '../../../services/principalPageService'

export const PrincipalPageContext = createContext<IPrincipalPageContext>(initialValue)

export default function PrincipalPageContextProvider({ children }: any) {
    const [data, setData] = useState<IPrincipalPageData[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [loadingIcon, setLoadingIcon] = useState<boolean>(true);
    const { webDataNetsRequest } = useContext(GenericContext)
    const { getInformation } = principalPageService(webDataNetsRequest)

    useEffect(() => {
        getInformation()
         .then( response =>{
            setData(response)
            setLoading(false)
        })
    }, [])

    const contextValue: IPrincipalPageContext = {
        data,
        loading,
        setLoadingIcon,
        loadingIcon
    }
    
    return (
        <PrincipalPageContext.Provider value={contextValue}>
            {children}
        </PrincipalPageContext.Provider>
        )
}