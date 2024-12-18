import { useState } from "react";

const SocialReactionsBoxes = ({initialNumber, icon}) =>{

    const [clicks, setClicks] = useState(initialNumber);
    const [clicksCounter, setClicksCounter] = useState(0);
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () =>{

        setClicksCounter( prevState => {
                const newCounter = prevState + 1;

                if (newCounter === 2) {
                    setClicks(prevState => prevState - 2);
                    return 0;
                }

                return newCounter;
            }
        );

        setClicks(prevState => prevState + 1);
        setIsClicked(prevState => !prevState);
    }

    const socialBoxStyle = {
        maxWidth: "100px",
        maxHeight: "43px",
        boxSizing: "border-box",
        padding: "8px 16px",
        border: "1px solid #98989A",
        borderRadius: "12px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "4px",
        color: "#98989A",
        fontFamily: "Kumbh Sans",
        cursor: "pointer",
        boxSizing: "border-box"
    }

    const iconStyle = {
        color: isClicked ? "#FF5500" : "#98989A",
        minWidth: "0",
        minHeight: "0",
        display: "flex",
        alignItems: "center"
    }

    return <div style={socialBoxStyle} onClick={handleClick}>
        <div style={iconStyle}>{icon}</div>
        <p style={{color: "#98989A", fontSize: "18px"}}>{`${parseInt(clicks)}`}</p>
    </div>
}

export default SocialReactionsBoxes;