import React from 'react'

interface ICardInsideDas {
    children: JSX.Element
    style?: any
}

export const CardInsideDas = ({ children, style }: ICardInsideDas) =>{
    return <div style={{...style, width: 'max-content', padding: '14px 12px', borderRadius: '12px', border: '1px solid #ECECEC', backgroundColor: '#F5F5F5'}}>{children}</div>
}