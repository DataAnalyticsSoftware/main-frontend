import React from 'react'
import { ShopifyIcon } from '../../../../../../../components/SvgDas'
import { ButtonIconConnectionDas } from '../../../../../../../components/ButtonIconConnectionDas'

export const ShopifypButton=()=> {
  return (
    <>
    <ButtonIconConnectionDas 
      text='Shopify Connection' 
      icon={<ShopifyIcon/>}
    />
    </>
  )
}
