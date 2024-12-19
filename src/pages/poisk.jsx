
import Footer from "../components/footer";
import Header from "../components/header";
import AnimalSearchForm from "../components/AnimalSearchForm";
import FoundAnimalsCards from "../components/FoundAnimalsCards";
import React, { useState } from 'react';
import Poissski from "../components/poiisk";

const Poisk= () => {
    const [searchParams, setSearchParams] = useState({});

    return ( 
        <div>
            <Header/>
    
             <Poissski/>
            

            <Footer/>
        </div>
     );
}

export default Poisk;