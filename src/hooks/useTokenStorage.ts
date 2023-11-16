import { useEffect } from "react"
import { ITokenStorageProps } from "./type"

export const useTokenStorage = ({ setToken, navigate, token, deleteToken, setDeleteToken }: ITokenStorageProps) => {
    console.log(token);

    useEffect(() => {
        if (localStorage.getItem('access_token')) {
            setToken(localStorage.getItem('access_token'))
        } else {
            navigate('/', { replace: true })
        }
    }, [])


    useEffect(() => {
        if (token) {
            localStorage.setItem('access_token', token)
            navigate('/dashboards', { replace: true })
        } else {
            localStorage.removeItem('access_token')
            navigate('/', { replace: true })
        }
    }, [token])

    useEffect(() => {
        if (deleteToken) {
            localStorage.removeItem('access_token')
            navigate('/', { replace: true })
            setDeleteToken(false)
        }
    }, [deleteToken])
}