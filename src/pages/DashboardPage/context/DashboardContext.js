import React, {  createContext, useEffect, useState } from "react"
import { menuSticky } from '../../../utils/menuSticky'
import { cardDashboardContainer } from "../../../utils/cardDashboardContainer"
import { pricingTable } from "../../../utils/pricingTable"


export const DashboardContext = createContext(menuSticky)

export default function DashboardContextProvider ({children}){
    const [menu, setMenu] = useState([])
    const [menuSelected, setMenuSelected] = useState('Home')
    const [infoContainer, setInfoContainer] = useState([])
    const [pricing, setPricing] = useState([])

    useEffect(() =>{
        setMenu(menuSticky);
        setInfoContainer(cardDashboardContainer);
        setPricing(pricingTable);
    },[])


    return (
    <DashboardContext.Provider value={{ 
        menu,
        setMenu,
        menuSelected,
        setMenuSelected,
        infoContainer,
        setInfoContainer,
        pricing,
        setPricing
    }}>
        {children}
    </DashboardContext.Provider>)
}
