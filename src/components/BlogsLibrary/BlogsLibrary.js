import BlogsLibraryHeader from "./BlogsLibraryHeader";
import BlogsNavigationBar from "./BlogsNavigationBar";
import SingularBlogPreview from "./SingularBlogPreview";
import { Outlet } from "react-router-dom";
import "./BlogsLibrary.css";

const BlogsLibrary = () =>{
    return <>
        <BlogsLibraryHeader />
        <BlogsNavigationBar />

        <Outlet/>
        
        <SingularBlogPreview image= "./Image4.png" authorName= "John Tecson" topic= "Quantum Computing" date= "October 15, 2023" title= "The Quantum Leap in Computing" description= "Explore the revolution in quantum computing, its applications, and its potential impact on various industries."/>
        <SingularBlogPreview image= "./Image3.png" authorName= "Sarah Ethicist" topic= "AI Ethics" date= "November 5, 2023" title= "The Ethical Dilemmas of AI" description= "A deep dive into ethical challenges posed by AI, including bias, privacy, and transparency."/>
        <SingularBlogPreview image= "./Image2.png" authorName= "Astronomer X" topic= "Space Exploration" date= "December 10, 2023" title= "The Mars Colonization Challenge" description= "Exploring the technical and logistical challenges of human colonization on Mars."/>
    </>
}

export default BlogsLibrary;