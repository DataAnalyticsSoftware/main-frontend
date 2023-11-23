import { IWebDataNets } from "../context/type";

export const getData = (webDataNetsRequest: IWebDataNets, dataId: string, dataToSend: any) =>{
    const params = '?' + Object.entries(dataToSend).map(([ key, value ]) => `${key}=${value}`).join('&')
    return webDataNetsRequest(`api/data/${dataId}${params}`)
}
