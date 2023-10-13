import { IMenu } from "../../../modules/SideMenuComponent/type";

export interface MenuItem {
    name: string
    icon: string
    route: string
  }

export interface DashboardContextValue {
    menuSelected: IMenu;
    setMenuSelected: React.Dispatch<React.SetStateAction<IMenu>>;
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