import InnerCTABox from "./InnerCTABox";
import "./LastCTA.css";

const LastCTA = () =>{
    return <div className="mainBox">
        <div className="CTAHeaderBox">

            <img src="./SimpleLogo.png"/>

            <div className="CTAText">
                <p>Learn, Connect, and Innovate</p>
                <p>Be Part of the Future Tech Revolution</p>
                <p>Immerse yourself in the world of future technology. Explore our comprehensive resources, connect with fellow tech enthusiasts, and drive innovation in the industry. Join a dynamic community of forward-thinkers.</p>
            </div>
        </div>

        <div className="boxesStyles">

            <InnerCTABox title= "Resource Access" description= "Visitors can access a wide range of resources, including ebooks, whitepapers, reports." link= "resources"/>

            <InnerCTABox title= "Community Forum" description= "Join our active community forum to discuss industry trends, share insights, and collaborate with peers." link= "join our community"/>

            <InnerCTABox title= "Tech Events" description= "Stay updated on upcoming tech events, webinars, and conferences to enhance your knowledge."  link= "events"/>

        </div>
    </div>
}

export default LastCTA;