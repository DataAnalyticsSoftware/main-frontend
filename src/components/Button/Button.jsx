import React from 'react'

export const Button = (props) => {
    const { onClick, label } = props;

    return (
        <button class='p-3 bg-dark text-white shadow' style={{ borderRadius: '40px' }} onClick={onClick}>
            <div class='pl-5 pr-5'>
                {label}
            </div>
        </button>
    )
}