import React, { createContext, useState } from 'react'
import { useGenericRequest } from '../hooks/useGenericRequest';
import { initialValue } from './initialValues';
import { GenericContextValue, IUserData,ISingUpUserData } from './type';
import { useTokenStorage } from '../hooks/useTokenStorage';
import { useLogin } from '../hooks/useLogin';
import { useSignUp } from '../hooks/useSignUp';

export const GenericContext = createContext<GenericContextValue>(initialValue)

export default function GenericContextProvider({ children }: any) {
    const [login, setLogin] = useState<boolean>(false)
    const [signUp, setSignUp] = useState<boolean>(false)
    const [token, setToken] = useState(localStorage.getItem('access_token')) 
    const [deleteToken, setDeleteToken] = useState(false)
    const [userData, setUserData] = useState<IUserData>({password: undefined, username: undefined})
    const [userSignUpData, setUserSignUpData] = useState<ISingUpUserData>({name:undefined,email: undefined,password: undefined})
    const { webDataNetsRequest } = useGenericRequest(token, setToken)

    useLogin({webDataNetsRequest, userData, login, setToken, setLogin})
    useSignUp({webDataNetsRequest, userSignUpData, signUp, setSignUp})
    useTokenStorage({setToken, token, deleteToken, setDeleteToken})

    const contextValue: GenericContextValue = {
        token,
        setToken,
        setDeleteToken,
        setUserData,
        setLogin,
        webDataNetsRequest,
        setSignUp,        
        setUserSignUpData
    }
    
    return (
        <GenericContext.Provider value={contextValue}>
            {children}
        </GenericContext.Provider>)
}