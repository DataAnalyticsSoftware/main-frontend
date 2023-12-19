import { NavigateFunction } from "react-router-dom"
import { ISingUpUserData, IUserData } from "../context/type"

export interface ITokenStorageProps {
    setToken:React.Dispatch<React.SetStateAction<string | null>>
    token: string | null
    deleteToken: boolean
    setDeleteToken: React.Dispatch<React.SetStateAction<boolean>>
}

export interface ILoginProps {
    webDataNetsRequest: (route: string, body?: BodyInit | null | undefined, method?: "POST" | "GET" | "PUT", customHeaders?: HeadersInit | undefined) => Promise<any>
    userData: IUserData
    login: boolean
    setToken: React.Dispatch<React.SetStateAction<string | null>>
    setLogin: React.Dispatch<React.SetStateAction<boolean>>
    
}
export interface ISignUpProps {
    webDataNetsRequest: (route: string, body?: BodyInit | null | undefined, method?: "POST" | "GET" | "PUT", customHeaders?: HeadersInit | undefined) => Promise<any>
    userSignUpData: ISingUpUserData
    signUp: boolean
    setSignUp: React.Dispatch<React.SetStateAction<boolean>>    
}