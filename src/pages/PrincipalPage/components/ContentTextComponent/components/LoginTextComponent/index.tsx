import React from 'react'
import { LoginComponent } from '../../../LoginComponent'
import { ITextProps } from '../../types'
import { Button } from '../../../../../../components/Button'

export const LoginTextComponent = ({dataInformation, index}: ITextProps) => {
    return (
        <div key={index} style={{ width:'100%', height:'100vh', position: 'relative', display: 'block', marginBottom: '120px', overflow: 'hidden' }}  >
            <LoginComponent />
        </div>)
}