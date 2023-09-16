import React from 'react';

function ScrollToElementButton(props:any) {
    const { targetId, label, className }:any = props;

    const handleClick = () => {
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <a  style={{ color: 'black' }} className={`nav-link scroll-button  ${className}`} onClick={handleClick} href="#">{label}</a>
    );
}

export default ScrollToElementButton;