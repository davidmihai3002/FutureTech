import React from "react";


const Button = ({buttonWidth, buttonHeight, buttonText, buttonLink}) =>{
    const buttonStyle = {
        display: "flex",
        width: `${buttonWidth}px`,
        height: `${buttonHeight}px`,
        backgroundColor: "#FFD11A",
        borderRadius: "10px",
        color: "#141414",
        fontSize: "18px",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid black",
        textDecoration: "none",
        boxSizing: "border-box"
    }

    return <a href = {`${buttonLink}`} style={buttonStyle}>{buttonText}</a>
}

export default Button;