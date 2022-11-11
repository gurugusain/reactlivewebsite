import React from "react";
import Web from "../src/images/home.jpg";
import Common from "./Common";

const Home = () => {
    return (
        <>
           <Common
            name="Grow your business with"
            imgsrc={Web}
            visit="./services"
            btnname="Get Started"
           />
        </>
    )
}

export default Home;