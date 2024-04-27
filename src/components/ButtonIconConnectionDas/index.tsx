import { Button, ButtonOwnProps, ButtonTypeMap, ExtendButtonBase } from '@mui/material'
import React from 'react'
import styles from './styles.module.scss'

interface IButtonDas {
    text: string
    onClick?: any
    style?: any
    customClass?: any
    icon?:JSX.Element
}

export const ButtonIconConnectionDas = (props: ButtonOwnProps & IButtonDas & { component?: React.ElementType;}): JSX.Element => {

    const STYLES_FROM_VARIANT = {
        contained: styles.button_connections
    }

    return (
        <button className={`${STYLES_FROM_VARIANT[props.variant || 'contained'] } ${styles.button} ${props.disabled ? styles.button_disabled : ''} ${props.customClass}`} {...props}>
            <div className={styles.button_connection_container}>
                <div className={styles.icon}>{props.icon}</div>
                <div>{props.text}</div>
            </div>

        </button>
    )
}