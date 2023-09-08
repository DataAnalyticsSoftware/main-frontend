import React from 'react';

function ScrollToElementButton(props) {
    const { targetId, label, className } = props;

    const handleClick = () => {
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <a class="nav-link" style={{ color: 'black' }} className={`scroll-button ${className}`} onClick={handleClick} href="#">{label}</a>
    );
}

export default ScrollToElementButton;