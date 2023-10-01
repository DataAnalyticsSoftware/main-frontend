import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"

export const GenericContext = createContext({})

export default function GenericContextProvider({ children }: any) {
    const apiUrl = 'http://79.143.94.15:8001/api/users/';
    const [data, setData] = useState<any>([])
    const [token, setToken] = useState(localStorage.getItem('access_token'))
    const navigate = useNavigate()
    const [deleteToken, setDeleteToken] = useState(false)

    useEffect(() => {
        fetch('http://79.143.94.15:8001/api/users/')
        .then(response => response.json())
            .then(data => setData(data));     
    }, [])
    useEffect(() => {
        if(localStorage.getItem('access_token')){
            setToken(data.map((i: any) => i.token))
            console.log(token,'token');
            
        }else{
            navigate('/', { replace: true })
        }
    }, [])


    useEffect(() => {
        if (token) {        
            localStorage.setItem('access_token', token)
            console.log();
            
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

function SetStateAction<T>(arg0: never[]) {
    throw new Error('Function not implemented.');
}
