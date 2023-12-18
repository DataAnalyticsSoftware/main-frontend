import React, {  createContext, useEffect, useState,ReactNode  } from "react"
import { pricingTable } from "../../../utils/pricingTable"
import { initialValues } from "./initialValues";
import { DashboardContextValue } from "./types";
import { IMenu } from "../../../modules/SideMenuComponent/type";

export const DashboardContext = createContext<DashboardContextValue>(initialValues);

export default function DashboardContextProvider({ children }: any) {
  const [menuSelected, setMenuSelected] = useState<IMenu>(initialValues.menuSelected)
  const [pricing, setPricing] = useState<any[]>([])
  const [displaySelected, setDisplaySelected] = useState<string>('Display 1')
  const [displayGraphic, setDisplayGraphic] = useState<string>('Vertical Bars')
  const [displayCollection,setDisplayCollection] = useState<string>('collection 1')
  const [collectionData, setCollectionData] = useState<any[]>([])
  const [modalCreateCollection, setModalCreateCollection] = useState<boolean>(false)
  
  useEffect(() =>{
    setPricing(pricingTable);      
  }, [])
    
  const contextValue: DashboardContextValue = {
    menuSelected,
    setMenuSelected,
    pricing,
    setPricing,
    displaySelected,
    setDisplaySelected,
    displayGraphic,
    setDisplayGraphic,
    displayCollection,
    setDisplayCollection,
    collectionData,
    setCollectionData,
    modalCreateCollection,
    setModalCreateCollection
  }

  return (
    <DashboardContext.Provider value={contextValue}>
      {children}
    </DashboardContext.Provider>
  )
}
