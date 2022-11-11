import React from "react";
import Web from "../src/images/home.jpg";
import Common from "./Common";

const About = () => {
    return (
        <>
            <Common
            name="Grow your business with"
            imgsrc={Web}
            visit="/contact"
            btnname="Contact Now"
           />
        </>
    )
}

export default About;