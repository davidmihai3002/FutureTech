import ResourcesHeader from "./ResourcesHeader";
import ResourceSubBox1 from "./ResourceSubBox1";
import ResourceSubBox2 from "./ResourceSubBox2";
import "./Resources.css"


const Resources = () =>{
    return <>
        <ResourcesHeader/>
        
        <div className="box1">
            <ResourceSubBox1 icon = "./Icon6.png" title= "Ebooks" description= "Explore our collection of ebooks covering a wide spectrum of future technology topics." users={["./Image4.png", "./Image2.png", "./Image3.png", "./Image4.png"]}/>
            <ResourceSubBox2 topic="Variety of Topics" topicDescription="Topics include AI in education (25%), renewable energy (20%), healthcare (15%), space exploration (25%), and biotechnology (15%)." bannerImg="./banner-image1.png" totalText="Over 100 ebooks" expertiseText="Ebooks are authored by renowned experts with an average of 15 years of experience"/>
        </div>

        <div className="box2">
            <ResourceSubBox1  icon = "./Icon7.png" title= "Whitepapers" description= "Dive into comprehensive reports and analyses with our collection of whitepapers. " users={["./Image5.png", "./Image6.png", "./Image7.png", "./Image8.png"]}/>

            <ResourceSubBox2 topic="Topics Coverage" topicDescription="Whitepapers cover quantum computing (20%), AI ethics (15%), space mining prospects (20%), AI in healthcare (15%), and renewable energy strategies (30%)." bannerImg="./banner-image2.png" totalText="Over 50 whitepapers" expertiseText="Whitepapers are authored by subject matter experts with an average of 20 years of experience."/>
        </div>
    </>
}

export default Resources;