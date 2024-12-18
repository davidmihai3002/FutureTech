import { FiArrowUpRight } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const ExternalLinks = ({boxWidth, boxHeight, boxText, boxLink}) =>{

    const linksBoxStyle = {
        // width: `${boxWidth}px`,
        minWidth: "100%",
        height: `${boxHeight}px`,
        padding: "24px 18px",
        fontSize: "18px",
        display: "flex",
        gap: "10px",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#141414",
        border: "1px solid #98989A",
        borderRadius: "12px",
        color: "#98989A",
        boxSizing: "border-box",
        textDecoration: "none",
        whiteSpace: "nowrap"
    }

    return <NavLink to={boxLink} style={linksBoxStyle}>
        <p>{boxText}</p>
        <a style={{display: "flex", alignItems: "center"}}><FiArrowUpRight style={{color: "FFD11A", width: "24px", height: "24px"}}/></a>
    </NavLink>
}

export default ExternalLinks;