import React from 'react'
import { Button } from '../../../../components/Button/Button'

export const LoginComponent = (props) => {
    return (
        <div class='rounded shadow-lg p-3 mb-5 bg-white rounded' style={{ maxWidth: '450px' }}>
            <form class='text-left pl-5 pt-2 pr-5' >
                <h1 class='mb-4'>Log In</h1>
                <div class="form-group ">
                    <label for="exampleInputEmail1">Email</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Email" />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter Your Password" />
                </div>
                <Button label={'Log in'} />
            </form>
            <h6 class="mt-2">Or</h6>
            <div class='pb-2'>
                <h5>Sig Up with google</h5>
            </div>
        </div>

    )
}