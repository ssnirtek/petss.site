import React, { useState } from 'react';
import AnimalSearchForm from "../components/AnimalSearchForm";
import Footer from '../components/footer';
import FoundAnimalsCards from '../components/FoundAnimalsCards';
import Header from "../components/header";

const AnimalSearch = () => {
    const [searchParams, setSearchParams] = useState({});

    return (
        <div>
            <Header/>
            <AnimalSearchForm onSearch={(params) => setSearchParams(params)} />
            {Object.keys(searchParams).length > 0 && (
                <FoundAnimalsCards searchParams={searchParams} />
            )}
            <Footer/>
        </div>
    );
};

export default AnimalSearch;