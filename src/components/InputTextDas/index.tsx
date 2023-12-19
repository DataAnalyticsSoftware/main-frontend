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
{ /**<div className={styles}>
<input
  type={type}
  className={inputClasses}
  style={{height:'56px', width:'380px', backgroundColor:'#ECECEC'}}
  id="validationTooltip03"
  required={required === 'yes'}
  value={value}
  onChange={(e: any) => onChange(e.target.value)} // Utiliza onChange en lugar de setState
/>
<div className={tooltip}>
  {submit ? (
    <div className="valid-feedback">{text}</div>
  ) : (
    <div className="invalid-feedback">{text}</div>
  )}
</div>
  </div>**/} 