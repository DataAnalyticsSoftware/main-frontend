import React from 'react'
import { ButtonDas } from '../../../../../../../components/ButtonDas'
import { MailChimpIcon } from '../../../../../../../components/SvgDas'
import { ButtonIconConnectionDas } from '../../../../../../../components/ButtonIconConnectionDas'

export const MailchimpButton=()=> {
  return (
    <>
    <ButtonIconConnectionDas 
      text='MailChimp Connection' 
      icon={<MailChimpIcon/>}
    />
    </>
  )
}
