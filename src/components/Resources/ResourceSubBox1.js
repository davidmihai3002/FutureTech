import ExternalLinks from "../common components/ExternalLinks";
import "./Resources.css";


const ResourceSubBox1 = ({icon, title, description, users = []}) =>{
    return <div className="resourceBox1">
        
        <img src={icon}/>
        <p>{title}</p>
        <p>{description}</p>

        <div className="subBoxLinkWrapper">
            <ExternalLinks boxHeight={63} boxWidth={413} boxText="Download Now" boxLink="#"/>
        </div>

        <div className="userBox">
            <p>Downloaded by <br/> <strong>10k+ Users</strong></p>
            <div className="smallUsers">
                <img src={users[0]}/> 
                <img src={users[1]}/>
                <img src={users[2]}/>
                <img src={users[3]}/>
            </div>
        </div>

    </div>
}

export default ResourceSubBox1;