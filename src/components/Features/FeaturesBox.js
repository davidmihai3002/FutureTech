import TextBox from "../common components/TextBox";
import "./Features.css";

const FeaturesBox = ({icon, title, description, boxTitle = [], innerText = []}) =>{    

    return <div className="featureBox">

        <div className="featureDescription">
            <img src={icon}/>
            <p>{title}</p>
            <p>{description}</p>
        </div>

        <div className="textBoxes"> 

            <TextBox title={boxTitle[0]} innerText={innerText[0]}/>
            <TextBox title={boxTitle[1]} innerText={innerText[1]}/>
            <TextBox title={boxTitle[2]} innerText={innerText[2]}/>
            <TextBox title={boxTitle[3]} innerText={innerText[3]}/>
        </div>
    </div>
}

export default FeaturesBox;