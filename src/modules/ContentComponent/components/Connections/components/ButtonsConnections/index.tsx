import React from 'react'
import styles from './styles.module.scss'
import { ShopifypButton } from './ShopifyConnection'

export const ButtonsConnections=()=> {
  return (
    <div className={styles.container}> 
      <ShopifypButton/>
    </div>
  )
}
