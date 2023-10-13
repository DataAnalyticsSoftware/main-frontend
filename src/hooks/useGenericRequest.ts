
export const useGenericRequest = (token: string | null) => {

    const webDataNetsRequest = (route: string, body?: BodyInit | null | undefined, method: 'POST' | 'GET' | 'PUT' = 'GET', customHeaders?: HeadersInit | undefined): Promise<any> =>{
        
        const url = process.env.REACT_APP_BACKEND_ENPDOINT
        const authorization: HeadersInit | undefined = token && {'Authorization' : `Token ${token}`} || undefined
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
                    refreshToken()
                })
            .catch(error => console.log('error', error))
    }


    const refreshToken = () => {
        console.log(token)
    }

    return { webDataNetsRequest }
}