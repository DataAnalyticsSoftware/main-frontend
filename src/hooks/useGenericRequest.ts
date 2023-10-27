
export const useGenericRequest = (token: string | null, setToken: React.Dispatch<React.SetStateAction<string | null>>) => {

    const webDataNetsRequest = (route: string, body?: BodyInit | null | undefined, method: 'POST' | 'GET' | 'PUT' = 'GET', customHeaders?: HeadersInit | undefined, newToken?: string): Promise<any> =>{
        
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
                body,
            }).then(response => {
                if(response.status === 200)
                    return response.json()
                if(response.status === 401)
                    return refreshToken(route, body, method, customHeaders)
                })
            .catch(error => console.log('error', error))
    }

    const refreshToken = (route: string, body?: BodyInit | null | undefined, method: 'POST' | 'GET' | 'PUT' = 'GET', customHeaders?: HeadersInit | undefined) => {
        const url = process.env.REACT_APP_BACKEND_ENPDOINT
        const authorization: HeadersInit | undefined = token && {'Authorization' : `Token ${token}`} || undefined
        return fetch(`${url}api/refresh_token`,{
            method: 'PUT',
            mode: 'cors',
            headers: {
            'Content-Type': 'application/json',
            ...authorization
            }
        }).then(res => res.json())
        .then(res => {
            if(res.token){
                setToken(res.token)
                return webDataNetsRequest(route, body, method, customHeaders, res.token)
            }
        })
    }

    return { webDataNetsRequest }
}