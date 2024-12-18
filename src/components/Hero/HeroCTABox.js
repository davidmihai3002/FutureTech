import "./Hero.css"
import ExternalLinks from "../common components/ExternalLinks"

const HeroCTABox = () =>{
    return <div className="heroCTABox">
        <CTABoxUsers/>
        <div className="heroCTATextBox">
            <p>Explore 1000+ resources</p>
            <p>Over 1,000 articles on emerging tech trends and breakthroughs.</p>
        </div>
        <div className="linkWrapper">
            <ExternalLinks boxWidth={231} boxHeight={63} boxText= "Explore Resources" boxLink= "#"/>
        </div>
    </div>
}

const CTABoxUsers = () =>{
    return <div className="CTABoxUsers">
        <img src="./Image1.png"/>
        <img src="./Image2.png"/>
        <img src="./Image3.png"/>
        <img src="./Image4.png"/>
    </div>
}

export default HeroCTABox;