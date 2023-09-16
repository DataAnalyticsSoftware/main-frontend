import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"

export const GenericContext = createContext({})

export default function GenericContextProvider({children}:any) {
    const [token, setToken] = useState(localStorage.getItem('access_token'))
    const navigate = useNavigate()
    const [deleteToken, setDeleteToken] = useState(false)

    useEffect(() => {
        if(localStorage.getItem('access_token')){
            setToken(localStorage.getItem('access_token'))
        }else{
            navigate('/', { replace: true })
        }
    }, [])

    useEffect(() => {
        if(token) {
            localStorage.setItem('access_token', token)
            navigate('/dashboards', { replace: true })
        } else {
            localStorage.removeItem('access_token')
            navigate('/', { replace: true })
        }
    }, [token])

    useEffect(() => {
        if(deleteToken){
            localStorage.removeItem('access_token')
            navigate('/', { replace: true })
            setDeleteToken(false)
        }
    }, [deleteToken])

    return (
        <GenericContext.Provider value={{token, setToken, setDeleteToken}}>
            {children}
        </GenericContext.Provider>)
}