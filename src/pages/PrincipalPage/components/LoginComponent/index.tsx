import React, { ChangeEventHandler, useContext, useState } from 'react'
import { Button } from '../../../../components/Button/Button'
import style from './styles.module.scss'
import { GenericContext } from '../../../../context/GenericContext'

export const LoginComponent = (props:any) => {

    const { setUserEmail, setPassword, setLogin }: any = useContext(GenericContext)
    const handleSubmit= () => {setLogin(true)}

    return (
        <div className='rounded shadow-lg p-3 mb-5 bg-white rounded float-right' style={{ width: '620px' }}>
            <div  onSubmit={handleSubmit} className='text-left pl-5 pt-2 pr-5' >
                <h1 className='mb-4'>Log In</h1>
                <div className="form-group" >
                    <label htmlFor="exampleInputEmail1" >Email</label>
                    <input type="email" className={`${style.inputStyle} form-control` } onChange={(event:React.ChangeEvent<HTMLInputElement>) => setUserEmail(event.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Email" style={{ borderRadius: '20px', height: '42px' }} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className={`${style.inputStyle} form-control` } onChange={(event:React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)} id="exampleInputPassword1" placeholder="Enter Your Password" style={{ borderRadius: '20px', height: '42px' }} />
                </div>
                <div>
                    <Button onClick={handleSubmit} label={'Log in'} />
                </div>
            </div>
            <h6 className="mt-2">Or</h6>
            <div className='pb-2'>
                <h5>Sign Up with google</h5>
            </div>
        </div>

    )
}