import { Button, ButtonOwnProps, ButtonTypeMap, ExtendButtonBase } from '@mui/material'
import React from 'react'
import styles from './styles.module.scss'

interface IButtonDas {
    text: string
    onClick?: any
    style?: any
    pricing?:boolean
}

export const ButtonDas = (props: ButtonOwnProps & IButtonDas & { component?: React.ElementType;}): JSX.Element => {
    
    const STYLES_FROM_VARIANT = {
        outlined: props.pricing?styles.button_pricing:styles.button_outlined,
        contained: styles.button_contained
    }

    return <Button className={`${STYLES_FROM_VARIANT[props.variant || 'contained'] } ${styles.button} ${props.disabled ? styles.button_disabled : ''} `} {...props} variant={props.variant}>{props.text}</Button>
}