import React, {  createContext, useEffect, useState,ReactNode  } from "react"
import { menuSticky } from '../../../utils/menuSticky'
import { cardDashboardContainer } from "../../../utils/cardDashboardContainer"
import { pricingTable } from "../../../utils/pricingTable"

type MenuItem = {
  name: string;
  icon: string;
  route: string;
};

type DashboardContextValue = {
  menu: MenuItem[];
  setMenu: React.Dispatch<React.SetStateAction<MenuItem[]>>;
  menuSelected: string;
  setMenuSelected: React.Dispatch<React.SetStateAction<string>>;
  infoContainer: any[]; // Reemplaza "any[]" con el tipo correcto de tu "infoContainer" si es posible
  setInfoContainer: React.Dispatch<React.SetStateAction<any[]>>; // Reemplaza "any[]" si es posible
  pricing: any[]; // Reemplaza "any[]" con el tipo correcto de tu "pricing" si es posible
  setPricing: React.Dispatch<React.SetStateAction<any[]>>; // Reemplaza "any[]" si es posible
  displaySelected:string;
  setDisplaySelected: React.Dispatch<React.SetStateAction<string>>;
  displayGraphic:string,
  setDisplayGraphic: React.Dispatch<React.SetStateAction<string>>,
  displayCollection:string,
  setDisplayCollection: React.Dispatch<React.SetStateAction<string>>,
  collectionData:any[],
  setCollectionData:React.Dispatch<React.SetStateAction<any[]>>
};

export const DashboardContext = createContext<DashboardContextValue>({
  menu: [],
  setMenu: () => {},
  menuSelected: "",
  setMenuSelected: () => {},
  infoContainer: [],
  setInfoContainer: () => {},
  pricing: [],
  setPricing: () => { },
  displaySelected:'',
  setDisplaySelected: () => { },
  displayGraphic:'',
  setDisplayGraphic: () => { },
  displayCollection:'',
  setDisplayCollection: () => { },
  collectionData:[],
  setCollectionData: () => { }
});

export default function DashboardContextProvider({ children }: any) {
    const [menu, setMenu] = useState<any[]>([])
    const [menuSelected, setMenuSelected] = useState<any>('Home')
    const [infoContainer, setInfoContainer] = useState<any[]>([])
    const [pricing, setPricing] = useState<any[]>([])
    const [displaySelected, setDisplaySelected] = useState<any>('Display 1')
    const [displayGraphic, setDisplayGraphic] = useState<any>('Vertical Bars')
    const [displayCollection,setDisplayCollection] = useState<any>('collection 1')
    const [collectionData, setCollectionData] = useState<any[]>([])
  
    useEffect(() =>{
      setMenu(menuSticky);
      setInfoContainer(cardDashboardContainer);
      setPricing(pricingTable);      
    }, [])
    
  const contextValue: DashboardContextValue = {
    menu,
    setMenu,
    menuSelected,
    setMenuSelected,
    infoContainer,
    setInfoContainer,
    pricing,
    setPricing,
    displaySelected,
    setDisplaySelected,
    displayGraphic,
    setDisplayGraphic,
    displayCollection,
    setDisplayCollection,
    collectionData,
    setCollectionData
  };

    return (
    <DashboardContext.Provider value={contextValue}>
      {children}
    </DashboardContext.Provider>)
}
