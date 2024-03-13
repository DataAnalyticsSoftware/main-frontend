import { useEffect } from "react"
import { ILoginProps } from "./type"

export const useLogin = ({webDataNetsRequest, userData, login, setToken, setLogin}: ILoginProps) => {

    useEffect(() => {
        if(!login) return 
            webDataNetsRequest('api/login', JSON.stringify(userData), 'POST')
                .then((data: any) => setToken(data?.token)).finally(() => setLogin(false))
    }, [login])

}