import React from "react";
import FetureProduct from "./Components/FetureProduct";
import HeroComponents from "./Components/HeroComponents";
import Services from "./Components/Service";
import Trusted from "./Components/Trusted";

const Home = () => {
    return(
        <>
            <HeroComponents head={"Shoppe Store"}/>
            <FetureProduct/>
            <Services/>
            <Trusted/>
        </>
    )
}

export default Home;