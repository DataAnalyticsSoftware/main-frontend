import React, { createContext, useEffect, useState } from 'react'
import { useGenericRequest } from '../hooks/useGenericRequest';
import { initialValue } from './initialValues';
import { GenericContextValue, IUserData,ISingUpUserData } from './type';
import { useTokenStorage } from '../hooks/useTokenStorage';
import { useLogin } from '../hooks/useLogin';
import { useSignUp } from '../hooks/useSignUp';
import { useTranslation } from 'react-i18next';

export const GenericContext = createContext<GenericContextValue>(initialValue)

export default function GenericContextProvider({ children }: any) {
    const [login, setLogin] = useState<boolean>(false)
    const [signUp, setSignUp] = useState<boolean>(false)
    const [token, setToken] = useState(localStorage.getItem('access_token'))
    const [deleteToken, setDeleteToken] = useState(false)
    const [userData, setUserData] = useState<IUserData>({password: undefined, username: undefined})
    const [userSignUpData, setUserSignUpData] = useState<ISingUpUserData>({name:undefined,email: undefined,password: undefined})
    const [ openToast, setOpenToast ] = useState<boolean>(false)
    const [ openProfile, setOpenProfile ] = useState<boolean>(false)
    const [ messageToast, setMessageToast ] = useState<string>('')
    const { webDataNetsRequest } = useGenericRequest(token, setToken)
    const [t, i18n] = useTranslation('global')
    useLogin({webDataNetsRequest, userData, login, setToken, setLogin})
    useSignUp({webDataNetsRequest, userSignUpData, signUp, setSignUp})
    useTokenStorage({setToken, token, deleteToken, setDeleteToken})

    const handleToast = (message: string) => {
        setOpenToast(true)
        setMessageToast(message)
    }

    useEffect(() => {
        i18n.changeLanguage("es")
    }, [])
    
    
    const contextValue: GenericContextValue = {
        token,
        setToken,
        setDeleteToken,
        setUserData,
        setLogin,
        webDataNetsRequest,
        setSignUp,
        setUserSignUpData,
        openToast,
        messageToast,
        handleToast,
        setOpenToast,
        t,
        i18n,
        openProfile, 
        setOpenProfile
    }

    return (
        <GenericContext.Provider value={contextValue}>
            {children}
        </GenericContext.Provider>)
}