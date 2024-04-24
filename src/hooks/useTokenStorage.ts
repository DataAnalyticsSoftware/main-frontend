import { useEffect } from "react"
import { ITokenStorageProps } from "./type"
import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom";

export const useTokenStorage = ({setToken,  token, deleteToken, setDeleteToken}: ITokenStorageProps) => {
    
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        if(localStorage.getItem('access_token')){
            setToken(localStorage.getItem('access_token'))
        }else if(!localStorage.getItem('access_token') && location.pathname !== '/' && location.pathname !== '/RegisterScreen'){
           navigate('/', { replace: true })
        }
    }, [])


    useEffect(() => {
        if (token && location.pathname !== '/dashboards') {  
            localStorage.setItem('access_token', token)
            navigate('/dashboards', { replace: true })
        } else if(!token && location.pathname !== '/' && location.pathname !== '/RegisterScreen'){
            localStorage.removeItem('access_token')
            navigate('/', { replace: true })
        }
    }, [token])

    useEffect(() => {
        if(deleteToken && location.pathname !== '/'){
            localStorage.removeItem('access_token')
            navigate('/', { replace: true })
            setDeleteToken(false)
        }
    }, [deleteToken])
}