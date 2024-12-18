const TextBox = ({title, innerText}) =>{
    const textBoxStyle = {
        maxWidth: "443.5px",
        maxHeight: "190px",
        padding: "40px",
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "column",
        gap: "20px",
        backgroundColor: "#262626",
        border: "1px solid #666666",
        borderRadius: "12px",
        boxSizing: "border-box"
    }
    const titleStyle = {
        fontSize: "24px",
        fontWeight: "medium",
        color: "white",
        margin: "0"
    }
    const innerTextStyle = {
        fontSize: "16px",
        color: "#98989A",
        margin: "0"
    }

    return <div style={textBoxStyle}>
        <p style={titleStyle}>{title}</p>
        <p style={innerTextStyle}>{innerText}</p>
    </div>
}

export default TextBox;