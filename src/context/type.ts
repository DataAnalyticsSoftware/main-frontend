export interface GenericContextValue{
    setToken:React.Dispatch<React.SetStateAction<string | null>>
    token: string | null
    setDeleteToken:React.Dispatch<React.SetStateAction<boolean>>
    setUserData: React.Dispatch<React.SetStateAction<IUserData>>
    setLogin: React.Dispatch<React.SetStateAction<boolean>>
    webDataNetsRequest: IWebDataNets
}


export interface IWebDataNets {(route: string, body?: BodyInit | null | undefined, method?: "POST" | "GET" | "PUT" | undefined, customHeaders?: HeadersInit | undefined): Promise<any>}

export interface IUserData {
    username: string | undefined
    password: string | undefined
}