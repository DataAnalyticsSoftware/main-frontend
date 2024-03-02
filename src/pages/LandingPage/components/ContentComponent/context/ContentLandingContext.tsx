import React, { createContext, useContext, useEffect, useState } from 'react'
import { GenericContext } from '../../../../../context/GenericContext'


//TODO: PASAR A UN ARCHIVO A PARTE

interface ILanding {
    icon:string,
    title:string,
    description:string,
    button: boolean,
    cardinality: number
}

interface IContentLandingContext{
    landings: ILanding[]
}

const initialValue: IContentLandingContext = {
    landings: []
}


export const ContentLandingContext = createContext<IContentLandingContext>(initialValue)

export const ContentLandingContextProvider = ({children}:any) =>
{
    const { webDataNetsRequest } = useContext(GenericContext)
    const [landings, setLandings] = useState<ILanding[]>([])


    useEffect(() => {
        webDataNetsRequest('api/landing_cards')
            .then(res => setLandings(res))
    }, [])

    const value: IContentLandingContext = {
        landings
    }

    return (<ContentLandingContext.Provider value={value}>
        {children}
    </ContentLandingContext.Provider>)
}