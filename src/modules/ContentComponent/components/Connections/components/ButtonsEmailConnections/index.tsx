import React from 'react'
import { MailchimpButton } from './MailchimpButton'
import styles from './styles.module.scss'

export const ButtonsEmailConnections=()=> {
  return (
    <div className={styles.container}> 
      <MailchimpButton/>
    </div>
  )
}
