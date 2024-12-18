import "./BlogsLibrary.css"
import ExternalLinks from "../common components/ExternalLinks";

const BlogsLibraryHeader = () =>{
    return <div className="blogHeaderWrapper">
        <div className="headingWrapper">
            <p>A Knowledge Treasure Trove</p>
            <h2>Explore FutureTech's In-Depth Blog Posts</h2>
        </div>
        <div className="headerLinkWrapper">
            <ExternalLinks boxHeight={63} boxWidth={152} boxText= "View All Blogs" boxLink= "#"/>
        </div>
    </div>
}

export default BlogsLibraryHeader;