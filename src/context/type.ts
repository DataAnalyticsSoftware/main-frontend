export interface GenericContextValue{
    setToken:React.Dispatch<React.SetStateAction<string | null>>
    token: string | null
    setDeleteToken:React.Dispatch<React.SetStateAction<boolean>>
    setUserEmail:React.Dispatch<React.SetStateAction<string | undefined>>
    setPassword:React.Dispatch<React.SetStateAction<string | undefined>>
    setLogin: React.Dispatch<React.SetStateAction<boolean>>
    webDataNetsRequest: IWebDataNets
}


export interface IWebDataNets {(route: string, body?: BodyInit | null | undefined, method?: "POST" | "GET" | "PUT" | undefined, customHeaders?: HeadersInit | undefined): Promise<any>}