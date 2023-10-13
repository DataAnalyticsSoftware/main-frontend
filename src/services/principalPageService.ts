import { IWebDataNets } from "../context/type";

export const principalPageService = (webDataNetsRequest: IWebDataNets) =>{

    const getInformation = (): Promise<any> => {
       return webDataNetsRequest('api/homeinformation')
            .then((response: any) => response)
    }

    return { getInformation }
}

