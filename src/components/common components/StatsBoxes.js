import React, {useEffect, useState} from "react"

const StatsBoxes = ({statNumber , statText, loadTime, thousand}) =>{

    const [counter, setCounter] = useState(0)

    useEffect(() => {
        const intervalID = setInterval(() => {
            setCounter(prevState => {
                if (prevState === statNumber) {
                    clearInterval(intervalID);
                    return statNumber;
                }
                
                return prevState + 1;
            
            })

        }, loadTime);

        return () => {
            clearInterval(intervalID)
        }
        
    }, [])

    const statBoxStyle = {
        maxWidth: "247.67px",
        minHeight: "97px",
        color: "white",
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "column",
        gap: "10px",
        boxSizing: "border-box"
    }

    const statTextStyle = {
        color: "#98989A",
        fontSize: "18px",
        fontWeight: "400",
        width: "auto",
        margin: "auto 0"
    }

    return <div style={statBoxStyle}>
        <p style={{
            fontSize: "40px", 
            fontWeight: "600", 
            width: "auto", 
            margin: "auto 0"
            }}>
            {`${counter}`}<span style={{display: thousand ? "" : "none"}}>k</span>
            <span style={{color: "#FFD11A"}}>+</span></p>
            
        <p style={statTextStyle}>{statText}</p>
    </div>
}

export default StatsBoxes;