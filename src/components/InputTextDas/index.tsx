import React from 'react';
import './index.scss';
import { TextField, TextFieldProps, TextFieldVariants } from '@mui/material';

interface IInputTextDas {
  handlerOnChange?: any
}

export const InputTextDas = (props: { variant?: TextFieldVariants; } & Omit<TextFieldProps, 'variant'> & IInputTextDas) => {
    const { handlerOnChange } = props;
    return <TextField id="outlined-basic" style={{width: '100%'}} onChange={(value: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => handlerOnChange(value.target.value)} {...props} /> 
}