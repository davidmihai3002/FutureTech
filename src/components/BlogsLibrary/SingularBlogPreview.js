import SocialReactionsBoxes from "../common components/SocialReactionsBoxes";
import ExternalLinks from "../common components/ExternalLinks";
import "./BlogsLibrary.css";
import { VscHeart } from "react-icons/vsc";
import { VscComment } from "react-icons/vsc";
import { VscSend } from "react-icons/vsc";

const SingularBlogPreview = ({image, authorName, topic, date, title, description}) =>{

    return <div className="blogPreviewWrapper">

        <div className="authorData">
            <img src= {image}/>
            <div className="userDataWrapper">
                <p>{authorName}</p>
                <p>{topic}</p>
            </div>
        </div>

        <div className="authorDataMobileWrapper">
        
        <div className="authorDataMobile">
            <img src= {image}/>
            <div className="mobileUserDataWrapper">
                <p>{authorName}</p>
                <p>{topic}</p>
            </div>
        </div>

        <div className="mobileLinkWrapper">
            <ExternalLinks boxHeight={50} boxWidth={140} boxText="View Blog" boxLink="#"/>
        </div>

        </div>

        <div className="blogData">

            <p>{date}</p>
            <p>{title}</p>
            <p>{description}</p>

            <div className="socialReactionsWrapper">
                <SocialReactionsBoxes initialNumber={153} icon={<VscHeart/>}/>
                <SocialReactionsBoxes initialNumber={29} icon={<VscComment/>}/>
                <SocialReactionsBoxes initialNumber={7} icon={<VscSend/>}/>
            </div>
        </div>

        <div className="linksWrapper">
        <ExternalLinks boxHeight={63} boxWidth={162} boxText="View Blog" boxLink="#"/>
        </div>
        
        </div>
}

export default SingularBlogPreview;