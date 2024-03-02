import { TFunction, i18n } from "i18next"

export interface GenericContextValue{
    setToken:React.Dispatch<React.SetStateAction<string | null>>
    token: string | null
    setDeleteToken:React.Dispatch<React.SetStateAction<boolean>>
    setUserData: React.Dispatch<React.SetStateAction<IUserData>>
    setLogin: React.Dispatch<React.SetStateAction<boolean>>
    setSignUp: React.Dispatch<React.SetStateAction<boolean>>
    setUserSignUpData: React.Dispatch<React.SetStateAction<ISingUpUserData>>
    webDataNetsRequest: IWebDataNets
    openToast: boolean
    messageToast: string
    handleToast: (message: string) => void
    setOpenToast: React.Dispatch<React.SetStateAction<boolean>>
    t:TFunction<"global", undefined> |( () => string) ,
    i18n:i18n | null
}


export interface IWebDataNets {(route: string, body?: BodyInit | null | undefined, method?: "POST" | "GET" | "PUT" | "DELETE" | undefined, customHeaders?: HeadersInit | undefined): Promise<any>}

export interface IUserData {
    username: string | undefined
    password: string | undefined
}
export interface ISingUpUserData {
    name:string | undefined
    email: string | undefined
    password: string | undefined
}