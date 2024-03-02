import React, { useContext, useState } from 'react'
import { ButtonDas } from './../../../../../../components/ButtonDas/index';
import { GenericContext } from '../../../../../../context/GenericContext';

export const Form=()=> {

  const [email, setEmail] = useState<string>('prueba'+Math.random()+'@gmail.com')
  const [comment, setComment] = useState<string>('comentario random')

  const { webDataNetsRequest } = useContext(GenericContext)

  const handleSubmit = () =>{
    const data = {
      email: email,
      comment: comment
    }
    webDataNetsRequest('api/submit_form',JSON.stringify(data), 'POST')
  }
  return (
    <div>
        <ButtonDas text='SUBMIT' onClick={handleSubmit}/>
    </div>
  )
}