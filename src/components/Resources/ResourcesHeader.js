import ExternalLinks from "../common components/ExternalLinks";
import "./Resources.css";


const ResourcesHeader = () =>{
    return <div className="resourcesHeaderWrapper">
        <div className="resourcesTextBox">
            <p>Your Gateway to In-Depth Information</p>
            <h2>Unlock Valuable Knowledge with FutureTech's Resources</h2>
        </div>
        <div className="resourcesLinkWrapper">
            <ExternalLinks boxWidth = {235} boxHeight={63} boxText= "View All Resources" boxLink= "/"/>
        </div>
    </div>
}

export default ResourcesHeader;