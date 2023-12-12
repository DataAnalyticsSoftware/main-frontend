import React, { ChangeEventHandler, useContext, useState } from 'react'
import style from './styles.module.scss'
import { GenericContext } from '../../../../context/GenericContext'
import  { BackgroundLogin } from './utils/GetSVGComponent';
import Input from '@mui/joy/Input';
import { Button } from '@mui/material';

export const LoginComponent = () => {

    const {  setLogin, setUserData } = useContext(GenericContext)
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const handleSubmit= () => {
        setLogin(true)
        setUserData({password:password, username: email})
    }
 
    return (
        <div style={{width: '60vw', height: '100vh', float: 'right'}}>
            <div style={{display: 'flex', justifyContent: 'center',alignItems:'center', position: 'relative', height: '100%', width: '100%'}}>
                <div className={style.card_login}>
                    <span style={{fontWeight: 700, fontSize: '28px', width: '100%', textAlign: 'left'}}>Log In</span>
                    <div style={{marginTop: '20px', width: '100%'}}>
                        <label style={{width: '100%', textAlign: 'left', marginTop: '20px'}}  htmlFor="">Email</label>
                        <Input style={{width: '100%', height: '60px'}} placeholder="Enter email..."  onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)} variant="soft" />
                        <label style={{width: '100%', textAlign: 'left', marginTop: '20px'}}  htmlFor="">Password</label>
                        <Input style={{width: '100%', height: '60px'}}  placeholder="Enter password..."  onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)} variant="soft" />
                    </div>
                    <div style={{width: '100%'}}>
                        <Button onClick={handleSubmit} style={{backgroundColor: '#4F46E5', color: 'white', width: '100%', height: '60px', borderRadius: '210px', marginTop: '40px'}}>Log In</Button>
                    </div>
                </div>
                <div style={{display: 'flex', width: '700px', height: '700px', position: 'relative', left: 0, top: 0}}>
                    <div style={{position: 'relative', width: '100%', height: '100%'}}>
                        <BackgroundLogin/>
                    </div>
                </div>
            </div>
        </div>
                

    )
}