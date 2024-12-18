import { FiArrowUpRight } from "react-icons/fi";
import "./PostHeroLinks.css";

const PostLink = ({image, heading, subHeading, description, link}) =>{
    return <div className="postLinkWrapper">
        <div className="postLink">
            <img src= {image}/>
            <p>{heading}</p>
            <p>{subHeading}</p>
            <p>{description}</p>
        </div>
        <div className="external">
            <a href = {link} style={{color:"black"}}><FiArrowUpRight style={{width: "24px", height: "24px"}}/></a>
        </div>
    </div>
}

export default PostLink;