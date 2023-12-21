import { IMenu } from "../../../modules/SideMenuComponent/type";

export interface MenuItem {
    name: string
    icon: string
    route: string
  }

export interface DashboardContextValue {
    menuSelected: IMenu;
    setMenuSelected: React.Dispatch<React.SetStateAction<IMenu>>;
    pricing: any[];  
    setPricing: React.Dispatch<React.SetStateAction<any[]>>;
  };