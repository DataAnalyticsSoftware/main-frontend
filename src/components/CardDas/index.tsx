import React, { MouseEventHandler } from 'react'

interface ICardDas {
    children: JSX.Element
    style?: React.CSSProperties | undefined
    onClick?: MouseEventHandler<HTMLDivElement>
}

export const CardDas = ({ children, style, onClick }: ICardDas): JSX.Element => {
    return <div onClick={onClick} style={{...style, padding: '25px', borderRadius: '14.5px', backgroundColor: 'white', boxShadow: '0px 4px 50px 0px rgba(0, 0, 0, 0.10)'}}>
        {children}
    </div>
}