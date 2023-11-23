
export const useGenericRequest = (token: string | null, setToken: React.Dispatch<React.SetStateAction<string | null>>) => {

    const webDataNetsRequest = (route: string, body?: BodyInit | null | undefined, method: 'POST' | 'GET' | 'PUT' = 'GET', customHeaders?: HeadersInit | undefined, newToken?: string | null): Promise<any> =>{
        
        const url = process.env.REACT_APP_BACKEND_ENPDOINT
        const authorization: HeadersInit | undefined = token && {'Authorization' : `Token ${newToken || token}`} || undefined
        return fetch(`${url}${route}`, {
                method: method,
                mode: 'cors',
                headers: {
                'Content-Type': 'application/json',
                ...authorization,
                ...customHeaders
                },
                body
            }).then(response => {
                if(response.status === 200)
                    return response.json()
                if(response.status === 401)
                   return refreshToken(url, authorization)
                        .then((res: any) => {
                            if(res?.token){
                                setToken(res.token)
                                localStorage.setItem('access_token', res.token)
                                return webDataNetsRequest(route, body, method, customHeaders, res.token)
                            }
                        })
                })
            .catch((error) =>{
                console.error(error)
                refreshToken(url, authorization)
                    .then((res: any) => {
                        if(res?.token){
                            setToken(res.token)
                            localStorage.setItem('access_token', res.token)
                            return webDataNetsRequest(route, body, method, customHeaders, res.token)
                        }
                    })
                }
            )
    }


    const refreshToken = (url: string | undefined, authorization: HeadersInit | undefined): Promise<Response> => {
        return fetch(`${url}api/refresh_token`, { 
            method: 'PUT', 
            headers:{ 
                'Content-type': 'application/json', 
                ...authorization
            }
        })
            .then(res => res.json())
    }

    return { webDataNetsRequest }
}