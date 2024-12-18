import FeaturesHeader from "./FeaturesHeader";
import FeaturesBox from "./FeaturesBox";
import "./Features.css";

const Features = () =>{
    
    return <>
        <FeaturesHeader />
        <FeaturesBox 
            
            icon= "./Icon4.png" 
        
            title="Future Technology Blog"             
        
            description="Stay informed with our blog section dedicated to future technology."   
                
            boxTitle={["Quantity" , "Variety", "Frequency" , "Authoritative"]} 
        
            innerText={["Over 1,000 articles on emerging tech trends and breakthroughs.", "Articles cover fields like AI, robotics, biotechnology, and more.", "Fresh content added daily to keep you up to date.", "Written by our team of tech experts and industry professionals."]}/>

        <FeaturesBox 
        
            icon= "./Icon5.png" 
            
            title="Research Insights Blog" 
            
            description="Dive deep into future technology concepts with our research section." 
            
            boxTitle={["Depth" , "Graphics", "Trends" , "Contributors"]} 
            
            innerText={["500+ research articles for in-depth understanding.", "Visual aids and infographics to enhance comprehension.", "Explore emerging trends in future technology research.", "Contributions from tech researchers and academics."]}/>
    </>
}

export default Features;
