import React, {  createContext, useEffect, useState,ReactNode  } from "react"
import { pricingTable } from "../../../utils/pricingTable"
import { initialValues } from "./initialValues";
import { DashboardContextValue } from "./types";
import { IMenu } from "../../../modules/SideMenuComponent/type";

export const DashboardContext = createContext<DashboardContextValue>(initialValues);

export default function DashboardContextProvider({ children }: any) {
  const [menuSelected, setMenuSelected] = useState<IMenu>(initialValues.menuSelected)
  const [pricing, setPricing] = useState<any[]>([])
  

  useEffect(() =>{
    setPricing(pricingTable);      
  }, [])
    
  const contextValue: DashboardContextValue = {
    menuSelected,
    setMenuSelected,
    pricing,
    setPricing
  }

  return (
    <DashboardContext.Provider value={contextValue}>
      {children}
    </DashboardContext.Provider>
  )
}
