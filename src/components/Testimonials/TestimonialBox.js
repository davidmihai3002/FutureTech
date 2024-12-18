import "./Testimonials.css";

const TestimonialBox = ({user, name, location, text}) =>{
    return <div className="testimonialsWrapper">
        <div className="userDetails">
            <img src= {user}/>
            <div className="userText">
                <p>{name}</p>
                <p>{location}</p>
            </div>
        </div>

        <div className="ratings">
            <img src="./star.png"/>
            <img src="./star.png"/>
            <img src="./star.png"/>
            <img src="./star.png"/>
            <img src="./star.png"/>
        </div>

        <div className="testimonialsTextBox">
            <p>{text}</p>
        </div>
    </div>
}

export default TestimonialBox;