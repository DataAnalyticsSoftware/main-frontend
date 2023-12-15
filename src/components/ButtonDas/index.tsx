import { Button, ButtonOwnProps, ButtonTypeMap, ExtendButtonBase } from '@mui/material'
import React from 'react'
import styles from './styles.module.scss'

interface IButtonDas {
    text: string
    onClick?: any
    style?: any
}

export const ButtonDas = (props: ButtonOwnProps & IButtonDas & {
    component?: React.ElementType;
  }): JSX.Element => {

    const STYLES_FROM_VARIANT = {
        outlined: styles.button_outlined,
        contained: styles.button_contained
    }

    return <Button className={`${STYLES_FROM_VARIANT[props.variant || 'contained'] } ${styles.button}`} {...props} variant={props.variant}>{props.text}</Button>
}