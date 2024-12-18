import HeroHeadingText from "./HeroHeadingText";
import HeroStats from "./HeroStats";
import HeroCTABox from "./HeroCTABox";
import "./Hero.css"

const Hero = () =>{
    return <div className="heroWrapper">
        <div className="heroBox1">
            <HeroHeadingText />
            <HeroStats />
        </div>

        <HeroCTABox />
    </div>
}

export default Hero;