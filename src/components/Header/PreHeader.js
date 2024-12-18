import { GoArrowUpRight } from "react-icons/go";
import "./Header.css"

const PreHeader = () => {

    return <a href="#" className="preHeaderStyle">
        <p style={{margin: "0"}}>Subscribe to our Newsletter For New & latest Blogs and Resources</p>
        <GoArrowUpRight style={{color: "#FFD11A", width: "24px", height: "24px"}}/>
    </a>
}

export default PreHeader;