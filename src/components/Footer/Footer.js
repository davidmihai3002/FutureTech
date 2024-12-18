import ExternalLinks from "../common components/ExternalLinks";
import { NavLink } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import "./Footer.css"

const Footer = () =>{

    const homeArray = ["Features", "Blogs", "Resources", "Testimonials", "Contact Us", "Newsletter"];
    const newsArray = ["Trending Stories", "Featured Videos", "Technology", "Health", "Politics", "Environment"];
    const blogsArray = ["Quantum Computing", "AI Ethics", "Space Exploration", "Biotechnology", "Renewable Energy", "Biohacking"];
    const podcastsArray = ["AI Revlution", "AI Revlution", "TechTalk AI", "AI Conversations"];
    const resourcesArray = ["Whitepapers", "Ebooks", "Reports", "Research Papers"]

    return <div className="footerWrapper">

        <div className="footerBox1">

            <ul className="fb">
                <p className="listHeader">Home</p>
                {homeArray.map((el, index) => (
                    <li key={index}><NavLink className="footerLink" to={`/home/${el.toLowerCase()}`}>{el}</NavLink></li>
                ))}
            </ul>

            <ul className="fb">
                <p className="listHeader">News</p>
                {newsArray.map((el, index) => (
                    <li key={index}><NavLink className="footerLink" to={`/news/${el.toLowerCase()}`}>{el}</NavLink></li>
                ))}
            </ul>

            <ul className="fb">
                <p className="listHeader">Blogs</p>
                {blogsArray.map((el, index) => (
                    <li key={index}><NavLink className="footerLink" to={`/blogs/${el.toLowerCase()}`}>{el}</NavLink></li>
                ))}
            </ul>
            
            <ul className="fb">
                <p className="listHeader">Podcasts</p>
                {podcastsArray.map((el, index) => (
                    <li key={index}><NavLink className="footerLink" to={`/podcasts/${el.toLowerCase()}`}>{el}</NavLink></li>
                ))}
            </ul>

            <ul className="fb">
                <p className="listHeader">Resources</p>
                {resourcesArray.map((el, index) => (
                    <li key={index}>
                        <ExternalLinks boxText={el} boxHeight={37} boxLink={`/blogs/${el.toLowerCase()}`}/>
                    </li>
                ))}
            </ul>
        </div>

        <div className="footerBox2">

            <div className="termsConditions">
                <NavLink to="/terms-and-conditions/terms" className= "termsText">Terms & Conditions</NavLink>
                <NavLink to="/terms-and-conditions/privacy" className= "termsText"> Privacy Policy </NavLink>
            </div>

            <div className="socials">

                <a href="#"><FaTwitter style={{width: "24px", height: "24px", color: "white"}}/>
                </a>

                <a href="#"><FaInstagramSquare style={{width: "24px", height: "24px", color: "white"}}/>
                </a>

                <a href="#"><FaLinkedin style={{width: "24px", height: "24px", color: "white"}}/>
                </a>
                
            </div>

            <p>© 2024 FutureTech. All rights reserved.</p>

        </div>
    </div>
}

export default Footer;