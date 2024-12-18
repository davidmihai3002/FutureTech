import { FiArrowUpRight } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import "./LastCTA.css";

const InnerCTABox = ({title, description, link}) =>{
    return <div className="innerBox">
        <div className="linkBox">
            <p>{title}</p>
            <div className="arrow">
                <NavLink to= {`./${link}`}>
                    <FiArrowUpRight style={{width: "24px", height: "24px", color: "black"}}/>
                </NavLink>
            </div>
        </div>
        <p>{description}</p>
    </div>
}

export default InnerCTABox;