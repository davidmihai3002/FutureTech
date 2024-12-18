import ExternalLinks from "../common components/ExternalLinks";
import "./Testimonials.css";

const TestimonialsHeader = () =>{
    return <div className="testimonialsHeaderWrapper">

        <div className="headerTextBox">
            <p>What Our Readers Say</p>
            <p>Real Words from Real Readers</p>
        </div>

        <div className="testimonialLinkWrapper">
            <ExternalLinks boxHeight={63} boxText= "View All Testimonials"/>
        </div>

    </div>
}

export default TestimonialsHeader;