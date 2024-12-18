import { NavLink } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import "./Resources.css"


const ResourceSubBox2 = ({topic, topicDescription, bannerImg, totalText, expertiseText}) => {
    return <div className="resourceBox2">

        <div className="topicBox">
            <p>{topic}</p>
            <p>{topicDescription}</p>
        </div>

        <img src= {bannerImg}/>

        <div className="detailsBox1">
            <div className="db1A">
                <p>Total Resources</p>
                <p>{totalText}</p>
            </div>
            <div className="db1B">

                <div className="downloadFormats">
                <p>Download Formats</p>
                <p>PDF format for access.</p>
                </div>

                <div className="previewButton">
                    <NavLink className= "previewNavLink" to="/">Preview</NavLink>
                    <FaRegEye style={{color: "#FFD11A", width: "24px", height: "24px"}}/>
                </div>
            </div>
        </div>

        <div className="detailsBox2">
            <p>Average Expertise</p>
            <p>{expertiseText}</p>
        </div>
    </div>
}

export default ResourceSubBox2;