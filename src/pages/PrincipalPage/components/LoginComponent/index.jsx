import React, { useContext } from 'react'
import { Button } from '../../../../components/Button/Button'
import style from './styles.module.scss'
import { GenericContext } from '../../../../context/GenericContext'

export const LoginComponent = (props) => {

    const { setToken } = useContext(GenericContext)

    return (
        <div class='rounded shadow-lg p-3 mb-5 bg-white rounded float-right' style={{ width: '620px' }}>
            <div  onsubmit="return false" class='text-left pl-5 pt-2 pr-5' >
                <h1 class='mb-4'>Log In</h1>
                <div class="form-group" >
                    <label for="exampleInputEmail1" >Email</label>
                    <input type="email" class={`${style.inputStyle} form-control` } id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Email" style={{ borderRadius: '20px', height: '42px' }} />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class={`${style.inputStyle} form-control` } id="exampleInputPassword1" placeholder="Enter Your Password" style={{ borderRadius: '20px', height: '42px' }} />
                </div>
                <div>
                    <Button onClick={() => setToken('xdddddddddddddddd')} label={'Log in'} />
                </div>
            </div>
            <h6 class="mt-2">Or</h6>
            <div class='pb-2'>
                <h5>Sig Up with google</h5>
            </div>
        </div>

    )
}