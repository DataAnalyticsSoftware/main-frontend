import React from 'react'
import { LoginComponent } from '../../../LoginComponent'
import { ITextProps } from '../../types'
import { Button } from '../../../../../../components/Button'

export const LoginTextComponent = ({dataInformation, index}: ITextProps) => {
    return (
        <div key={index} className="row mb-5" style={{ marginTop: '120px', marginBottom: '120px' }}  >
            <div  key={index} className="row" >
                <div className="col" >
                    <div className="text-left">
                        <h6>{dataInformation.title}</h6>
                            <div>
                                <h1 style={{ fontSize: '86px' }}>Try Our Website's <span style={{ color: '#0179FE' }}>Services Now!</span></h1> 
                                <p>Are you looking to take your YouTube channel to the next level and reach a wider audience? Look no further! Our website offers a comprehensive YouTube Views service designed to boost your video's visibility and engagement.</p>
                            </div>
                    </div>
                    <div className="text-left mt-4">
                        <Button label={'Learn More'} />
                    </div>
                </div>
                <div className="col">
                    <LoginComponent />
                </div> 
            </div>
        </div>)
}