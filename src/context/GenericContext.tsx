import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"

export const GenericContext = createContext({})

export default function GenericContextProvider({ children }: any) {
    const apiUrl = 'http://79.143.94.15:8001/:8001/api/users/';
    const [login, setLogin] = useState<boolean>(false)
    const [userEmail, setUserEmail] = useState<string | undefined>(undefined)
    const [password, setPassword] = useState<string | undefined>(undefined)
    const [token, setToken] = useState(localStorage.getItem('access_token'))
    const navigate = useNavigate()
    const [deleteToken, setDeleteToken] = useState(false)

    useEffect(() => {
        if(!login) return 
        fetch('http://79.143.94.15:8001/api/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({username: userEmail, password}),
        })
        .then(response => response.json())
            .then(data => setToken(data?.token)).finally(()=>setLogin(false))   
    }, [login])
    
    useEffect(() => {
        if(localStorage.getItem('access_token')){
            setToken(localStorage.getItem('access_token'))
        }else{
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
        if(deleteToken){
            localStorage.removeItem('access_token')
            navigate('/', { replace: true })
            setDeleteToken(false)
        }
    }, [deleteToken])

    return (
        <GenericContext.Provider value={{token, setToken, setDeleteToken, setUserEmail, setPassword, setLogin}}>
            {children}
        </GenericContext.Provider>)
}

function SetStateAction<T>(arg0: never[]) {
    throw new Error('Function not implemented.');
}
