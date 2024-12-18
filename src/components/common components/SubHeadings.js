const SubHeadings = ({subHeadingText}) =>{

    const headingStyle = {
        fontFamily: "Kumbh Sans",
        fontSize: "58px",
        lineHeight: "130%",
        fontWeight: "500",
        color: "white"
    }

    return <h1 style={headingStyle}>{subHeadingText}</h1>
}

export default SubHeadings;