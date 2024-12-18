import PreHeader from "./PreHeader";
import "./Header.css"
import Button from "../common components/Button"
import { useEffect, useState } from "react";
import { FiAlignRight, FiX } from "react-icons/fi";
import {BrowserRouter, Routes, Route, Link, NavLink, Outlet} from 'react-router-dom'

const Header = () =>{

    // here I initilized the states which I will use to add extra styling and manage the functionality of the mobile menu

    const [activeLink, setActiveLink] = useState(null); 
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
    const [isMobileOpened, setIsMobileOpened] = useState(false) ;

    const linksArray = ["Home", "News", "Podcasts", "Resources"];

    const pathsArray = ["/", "News", "Podcasts", "Resources"];

    // here I initialize a propery that helps me check if the width of the window is ready to turn the header into the mobile version

    useEffect(()=>{
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 600);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [])

    // here 1. I initialize the method that will help me change the style only on the links I click on    
    //  2. I initialize a method that I'll use to open and close (toggle) the mobile menu contents
    

    const handleClick = (index) => {
        setActiveLink(index); 
    };

    const toggleMenu = () => {
        setIsMobileOpened(prevState => !prevState)
    }

    return <>

        <PreHeader />

        {/* create first menu, visible for desktop and laptop users */}

        <div className="mainHeader">

            <a href=""><img src="./Logo.png"/></a>
            <ul className="navLinks" style={{display: isMobile ? "none" : "flex"}}>
            {linksArray.map((link, index) => (
                <li key={index}>
                    <NavLink
                        to={pathsArray[index]} 
                        onClick={() => handleClick(index)}
                        className={activeLink === index ? "active" : ""}
                    >
                        {link}
                    </NavLink>
                        </li>
                    ))}
            </ul>

            {/* adding the mobile menu opener, with the toggleMenu method, also a bit of styling */}

            <li className="openMenu" onClick={toggleMenu}><FiAlignRight style={{display: isMobile ? "block" : "none", width: "30px", height: "30px", color: "white"}}/></li>

            {/* make sure to hide the button on mobile view also */}

            {!isMobile && <Button buttonWidth={137} buttonHeight={55} buttonText= "Contact Us" buttonLink= ""/>}
        </div>

        {/* if the toggle method works, now we should be able to see only the mobile menu, also with the toggleMenu method to make sure we can also close the menu */}

        {isMobileOpened && <div className="mobileHeader">
            <a href=""><img src="./Logo.png"/></a>
            <ul className="mobileNavLinks">
                <li onClick={toggleMenu}><FiX style={{cursor: "pointer", color: "white", width: "30px", height: "30px", }}/></li>
                {linksArray.map((link, index) =>(
                    <li key={index}><a href="">{link}</a></li>
                ))}
            </ul>
        </div>}
    </>
}


export default Header;