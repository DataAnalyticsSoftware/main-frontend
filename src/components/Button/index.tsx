import React from 'react'

export const Button = (props:any) => {
    const { onClick, label } = props;

    return (
        <button className='p-3 bg-dark text-white shadow' style={{ borderRadius: '40px' }} onClick={onClick}>
            <div className='pl-5 pr-5'>
                {label}
            </div>
        </button>
    )
}