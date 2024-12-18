import { useState } from "react";
import "./BlogsLibrary.css";
import { NavLink } from "react-router-dom";

const BlogsNavigationBar = () =>{

    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (e, index) =>{
        e.preventDefault();
        setActiveIndex(index);
    }

    const clickedStyle = {
        backgroundColor: "#262626",
        border: "1px solid white"
    }
    

    const navigationLinks = ["All", "Quantum Computing", "AI Ethics", "Space Exploration", "Biotechnology", "Renewable Energy"];

    return <div className="blogsNavigationBar">
        <ul className="linksContainer">
            {navigationLinks.map((link, index) => (
                <li key={index}>
                    <NavLink to = {`/blogs/${link.toLowerCase()}`} className="navLink" onClick={(e) => handleClick(e, index)} style={activeIndex === index ? clickedStyle : {}}>{link}</NavLink>
                </li>
            ))}
        </ul>
    </div>
}


export default BlogsNavigationBar;
