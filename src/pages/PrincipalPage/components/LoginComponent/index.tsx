import React, { ChangeEventHandler, useContext, useEffect, useState } from 'react'
import style from './styles.module.scss'
import { GenericContext } from '../../../../context/GenericContext'
import  { ArrowRight, ArrowRightWithStick, BackgroundLogin } from './utils/GetSVGComponent';
import Input from '@mui/joy/Input';
import { ButtonDas } from '../../../../components/ButtonDas';
import { Button } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';

export const LoginComponent = () => {

    const {  setLogin, setUserData } = useContext(GenericContext)
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const handleSubmit= () => {
        setLogin(true)
        setUserData({password:password, username: email})
    }
 
    useEffect(() =>{

    })
    return (<>
        <div style={{width: 'calc( 40vw - 100px)', height: '100vh', float: 'left', paddingLeft: '100px'}}>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center',alignItems:'center', position: 'relative', height: '100%', width: '100%'}}>
                <div style={{width: '100%'}}>
                    <div style={{display: 'flex', gap: '9px', width: '290px', height: '54px', borderRadius: '100px', padding: '10px 20px 10px 10px', border:'1px solid #ECECEC', backgroundColor: '#FAFAFA'}}>
                        <div style={{backgroundColor: '#4F46E5', width: '85px', height: '34px', borderRadius: '100px',textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white'}}>
                            <span style={{fontWeight:600, fontSize: '14px' }}>BEST #1</span>
                        </div>
                        <span style={{fontSize:'14px', fontWeight: 500, display: 'flex', textAlign: 'center', justifyContent: 'center', alignItems: 'center'}}>Boost YouTube Views</span>
                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <ArrowRight/>
                        </div>
                    </div>  
                </div>
                <div style={{width: '100%', marginTop: '10px'}}>
                    <span style={{display: 'flex', justifyContent: 'left', textAlign: 'left',fontSize: '52px',fontStyle: 'normal', fontWeight: 800}}>Unleash The Power Of Our Website Today</span>
                </div>
                <div style={{width: '100%', marginTop: '10px'}}>
                    <span className={style.text_description}>Are you looking to take your YouTube channel to the next level and reach a wider audience? Look no further! </span>
                    <span className={style.text_description}>Our website offers a comprehensive YouTube Views service designed to boost your video's visibility and engagement.</span>
                </div>
                <div style={{marginTop: '20px', display: 'flex', justifyContent: 'left', width: '100%'}}>
                    <ButtonDas text={'Learn More'} variant={'contained'} endIcon={<ArrowRightWithStick/>} />
                </div>
            </div>
        </div>
        <div style={{width: '60vw', height: '100vh', float: 'right'}}>
            <div style={{display: 'flex', justifyContent: 'center',alignItems:'center', position: 'relative', height: '100%', width: '100%'}}>
                <div className={style.card_login}>
                    <span style={{fontWeight: 700, fontSize: '28px', width: '100%', textAlign: 'left'}}>Log In</span>
                    <div style={{marginTop: '20px', width: '100%'}}>
                        <label style={{width: '100%', textAlign: 'left', marginTop: '20px'}}  htmlFor="">Email</label>
                        <Input style={{width: '100%', height: '60px'}} placeholder="Enter email..." onKeyDown={(event) => event.key === 'Enter' && handleSubmit()} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)} variant="soft" />
                        <label style={{width: '100%', textAlign: 'left', marginTop: '20px'}}  htmlFor="">Password</label>
                        <Input style={{width: '100%', height: '60px'}}  placeholder="Enter password..." type='password' onKeyDown={(event) => event.key === 'Enter' && handleSubmit()} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)} variant="soft" />
                    </div>
                    <div style={{width: '100%', display: 'flex', flexDirection: 'row', gap: '30px', marginTop: '25px'}}>
                        <ButtonDas style={{ width: '100%', height: '60px' }} text={'Sign in'} onClick={handleSubmit} />
                        <ButtonDas style={{ width: '100%' }} text={'Sign up'} variant='outlined' />
                    </div>
                    <div style={{width: '100%', display: 'flex', flexDirection: 'row', gap: '10px', marginTop: '15px', marginBottom: '15px', justifyContent: 'center', alignItems: 'center', paddingRight: '40px', paddingLeft: '40px'}}>
                        <hr style={{border: '1px solid #E0E0E0', width: '100%'}} />
                        <span className={style.textOr}>Or</span>
                        <hr style={{border: '1px solid #E0E0E0', width: '100%'}} />
                    </div>
                    <div style={{ width: '100%'}}>
                        <Button startIcon={<GoogleIcon/>} style={{width: '100%', backgroundColor: '#ECECEC', borderRadius: '8px', color: 'black', textTransform: 'none', height: '48px'}}>Continue with Google</Button>
                    </div>
                </div>
                <div style={{display: 'flex', width: '700px', height: '700px', position: 'relative', left: 0, top: 0}}>
                    <div style={{position: 'relative', width: '100%', height: '100%'}}>
                        <BackgroundLogin/>
                    </div>
                </div>
            </div>
        </div>
    </>
        
                

    )
}