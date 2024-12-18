import TestimonialsHeader from "./TestimonialsHeader";
import TestimonialBox from "./TestimonialBox";
import "./Testimonials.css";

const Testimonials = () =>{
    return <>
        <TestimonialsHeader />
        <div className="testimonialBox">
            <TestimonialBox user="./Profile.png" name= "Sarah Thompson" location= "San Francisco, USA" text= "The ebooks on AI in education have been a game-changer for my research. They provide in-depth insights and case studies that are invaluable for staying updated."/>

            <TestimonialBox user="./Profile2.png" name= "Raj Patel" location= "Mumbai, India" text= "The whitepapers on renewable energy strategies have greatly influenced my work. They offer detailed data and analysis, helping me make informed decisions."/>

            <TestimonialBox user="./Profile3.png" name= "Emily Adams" location= "London, UK" text= "The AI in healthcare reports have been an essential resource for our hospital. They highlight the latest innovations and best practices, improving patient care."/>

            <TestimonialBox user="./Profile4.png" name= "Alan Jackson" location= "Houston, USA" text= "The reports on space mining prospects have fueled my passion for space exploration. They provide a comprehensive view of what lies beyond the Earth."/>

            <TestimonialBox user="./Profile5.png" name= "Jessica Miller" location= "Boston, USA" text= "The research papers on genomic breakthroughs have been a goldmine of information. They've shaped the direction of my research in genomics."/>

            <TestimonialBox user="./Profile6.png" name= "Diego Lopez" location= "Barcelona, Spain" text= "The ebooks on renewable energy strategies have given me the insights I needed to pivot our startup toward sustainability."/>
        </div>
    </>
}

export default Testimonials;