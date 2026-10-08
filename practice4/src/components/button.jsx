import React from "react";

function Button({children, onClick, type = 'button', style = {}}){
    return (
        <button type={type} onClick={onClick} style={{padding: '6px 12px', ...style}}>
            {children}
        </button>
    );
}

export default Button;