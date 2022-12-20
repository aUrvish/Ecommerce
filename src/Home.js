import React from "react";
import HeroComponents from "./Components/HeroComponents";
import Services from "./Components/Service";
import Trusted from "./Components/Trusted";

const Home = () => {
    return(
        <>
            <HeroComponents head={"Shoppe Store"}/>
            <Services/>
            <Trusted/>
        </>
    )
}

export default Home;