import React, { createContext, useState } from 'react'
import { useGenericRequest } from '../hooks/useGenericRequest';
import { useNavigate } from "react-router-dom"
import { initialValue } from './initialValues';
import { GenericContextValue, IUserData } from './type';
import { useTokenStorage } from '../hooks/useTokenStorage';
import { useLogin } from '../hooks/useLogin';

export const GenericContext = createContext<GenericContextValue>(initialValue)

export default function GenericContextProvider({ children }: any) {
    const [login, setLogin] = useState<boolean>(false)
    const [token, setToken] = useState(localStorage.getItem('access_token')) 
    const navigate = useNavigate()
    const [deleteToken, setDeleteToken] = useState(false)
    const [userData, setUserData] = useState<IUserData>({password: undefined, username: undefined})
    const { webDataNetsRequest } = useGenericRequest(token)

    useLogin({webDataNetsRequest, userData, login, setToken, setLogin})
    
    useTokenStorage({setToken, navigate, token, deleteToken, setDeleteToken})

    const contextValue: GenericContextValue = {
        token,
        setToken,
        setDeleteToken,
        setUserData,
        setLogin,
        webDataNetsRequest
    }
    
    return (
        <GenericContext.Provider value={contextValue}>
            {children}
        </GenericContext.Provider>)
}