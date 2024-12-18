import PostLink from "./PostLink";
import "./PostHeroLinks.css"

const PostHeroLinks = () =>{
    return <div className="postHeroLinksWrapper">
        <PostLink image="./Icon1.png" heading= "Latest News Updates" subHeading= "Stay Current" description= "Over 1,000 published monthly" link= "#"/>

        <PostLink image="./Icon2.png" heading= "Expert Contributors" subHeading= "Trusted Insights" description= "50+ renowned AI experts on our team" link= "#"/>

        <PostLink image="./Icon3.png" heading= "Global Readership" subHeading= "Worldwide Impact" description= "2 million monthly readers" link= "#"/>
    </div>
}

export default PostHeroLinks;