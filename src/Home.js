import React from "react";
import HeroComponents from "./Components/HeroComponents";
import Services from "./Components/Service";

const Home = () => {
    return(
        <>
            <HeroComponents head={"Shoppe Store"}/>
            <Services/>
        </>
    )
}

export default Home;