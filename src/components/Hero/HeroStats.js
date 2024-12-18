import StatsBoxes from "../common components/StatsBoxes";
import "./Hero.css"

const HeroStats = () =>{
    return <div className="heroStats">
        <StatsBoxes statNumber={300} statText= "Resources Available" loadTime={3} thousand={false}/>
        <StatsBoxes statNumber={12} statText= "Total Downloads" loadTime={100} thousand={true}/>
        <StatsBoxes statNumber={10} statText= "Active Users" loadTime={100} thousand={true}/>
    </div>
}

export default HeroStats;