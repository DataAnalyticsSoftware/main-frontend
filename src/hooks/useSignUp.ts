import { useEffect } from "react"
import { ISignUpProps } from "./type"

export const useSignUp = ({webDataNetsRequest, userSignUpData, signUp, setSignUp}: ISignUpProps) => {
    console.log(signUp,userSignUpData);
    
    useEffect(() => {
        if(!signUp) return 
            webDataNetsRequest('api/users', JSON.stringify(userSignUpData), 'POST')
                .then((data: any) => setSignUp(false))
    }, [signUp])

}