import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"


type GenericContextValue = {
    data:any[],
    setData: React.Dispatch<React.SetStateAction<any[]>>,
    setToken:React.Dispatch<React.SetStateAction<string | null>>,
    token: string | null;
    setDeleteToken:React.Dispatch<React.SetStateAction<boolean>>,
    setUserEmail:React.Dispatch<React.SetStateAction<string | undefined>>,
    setPassword:React.Dispatch<React.SetStateAction<string | undefined>>,
    setLogin: React.Dispatch<React.SetStateAction<boolean>>,
    setHasFetchedData: React.Dispatch<React.SetStateAction<boolean>>,
    hasFetchedData:boolean
};

export const GenericContext = createContext<GenericContextValue>({
    data: [],
    setData: () => { },
    token: '',
    setToken:() => { },
    setDeleteToken:() => { },
    setUserEmail:() => { },
    setPassword:() => { },
    setLogin: () => { },
    setHasFetchedData: () => { },
    hasFetchedData:false
});

export default function GenericContextProvider({ children }: any) {
    const [login, setLogin] = useState<boolean>(false)
    const [userEmail, setUserEmail] = useState<string | undefined>(undefined)
    const [password, setPassword] = useState<string | undefined>(undefined)
    const [token, setToken] = useState(localStorage.getItem('access_token')) 
    const navigate = useNavigate()
    const [deleteToken, setDeleteToken] = useState(false)
    const [data, setData] = useState<any>([])
    const [hasFetchedData, setHasFetchedData] = useState<boolean>(false);
    useEffect(() => {
        if(!login) return 
        fetch('http://79.143.94.15:8001/api/login', {
            method: 'POST',
            mode: 'cors',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({username: userEmail, password}),
        })
        .then(response => response.json())
            .then(data => setToken(data?.token)).finally(() => setLogin(false))
        
    }, [login])

    useEffect(() => {
        if(localStorage.getItem('access_token')){
            setToken(localStorage.getItem('access_token'))
        }else{
            navigate('/', { replace: true })
        }
    }, [])

useEffect(() => {
    if (!hasFetchedData) {
        console.log('entro');
        const fetchData = async () => {
            try {
                const response = await fetch('http://79.143.94.15:8001/api/data', {
                    method: 'GET',
                    headers: {
                        Authorization: `Token ${token}`,
                        'Content-Type': 'application/json',
                    },
                });

                if (response.status === 200) {
                    const responseData = await response.json();
                    console.log(responseData,'responseData');                    
                    setData(responseData);
                    setHasFetchedData(true); // Marcar que se ha realizado la solicitud
                } else {
                    console.error(`Error: ${response.status}`);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }
}, [hasFetchedData]);


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

  const contextValue: GenericContextValue = {
        data,
        setData,
        token,
        setToken,
        setDeleteToken,
        setUserEmail,
        setPassword,
        setLogin,
        setHasFetchedData,
        hasFetchedData
    };
    
    return (
        <GenericContext.Provider value={contextValue}>
            {children}
        </GenericContext.Provider>)
}
