import { NavigateFunction } from "react-router-dom"

export interface ITokenStorageProps {
    setToken:React.Dispatch<React.SetStateAction<string | null>>
    navigate:NavigateFunction
    token: string | null
    deleteToken: boolean
    setDeleteToken: React.Dispatch<React.SetStateAction<boolean>>
}

export interface ILoginProps {
    webDataNetsRequest: (route: string, body?: BodyInit | null | undefined, method?: "POST" | "GET" | "PUT", customHeaders?: HeadersInit | undefined) => Promise<any>
    userEmail: string | undefined
    password: string | undefined
    login: boolean
    setToken: React.Dispatch<React.SetStateAction<string | null>>
    setLogin: React.Dispatch<React.SetStateAction<boolean>>
}