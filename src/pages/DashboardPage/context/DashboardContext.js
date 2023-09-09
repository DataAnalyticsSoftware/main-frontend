import React, {  createContext, useEffect, useState } from "react"
import { menuSticky } from '../../../utils/menuSticky'


export const DashboardContext = createContext(menuSticky)

export default function DashboardContextProvider ({children}){
    const [menu, setMenu] = useState([])
    const [menuSelected, setMenuSelected] = useState('Home')

    useEffect(() =>{
        setMenu(menuSticky)
    },[])


    return (
    <DashboardContext.Provider value={{ 
        menu,
        setMenu,
        menuSelected,
        setMenuSelected
    }}>
        {children}
    </DashboardContext.Provider>)
}
