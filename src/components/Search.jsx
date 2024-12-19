import { useEffect, useState } from "react";
import AnimalCardsContainer from "../components/animpoisk";
import Card from "./card"; 
import "../page/qwe.css";
 
function Search() {
    const [pet, setPet] = useState([]);
    const [filteredPets, setFilteredPets] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchDistrict, setSearchDistrict] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const ITEMS_PER_PAGE = 2;
 
    useEffect(() => {
        load();
    }, []);
 
    function load() {
        fetch("https://pets.сделай.site/api/pets")
            .then((response) => response.json())
            .then((result) => {
                if (result && result.data && result.data.orders) {
                    setPet(result.data.orders);
                    setFilteredPets(result.data.orders);
                }
            })
            .catch((error) => console.error("Ошибка загрузки данных:", error));
    }
 
    const handleSearch = () => {
        const filtered = pet.filter((animal) => {
            const isKindMatch = animal.kind.toLowerCase().includes(searchQuery.toLowerCase());
            const isDistrictMatch = animal.district.toLowerCase().includes(searchDistrict.toLowerCase());
            return isKindMatch && isDistrictMatch;
        });
        setFilteredPets(filtered);
        setCurrentPage(1); 
    };
 
    const totalPages = Math.ceil(filteredPets.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentAnimals = filteredPets.slice(startIndex, startIndex + ITEMS_PER_PAGE);
 
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
 
    return (
        <div>
            <h1 className="text-center font-weight-bold mb-4" style={{ fontSize: '2.5rem', color: '#000' }}>Поиск по объявлениям</h1>
            
            <div className="search-container d-flex justify-content-center mb-4">
                <div className="search-box d-flex justify-content-between w-75">
                    <input
                        type="text"
                        placeholder="Поиск по животному"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="search-input form-control mb-3"
                    />
                    <input
                        type="text"
                        placeholder="Поиск по району"
                        value={searchDistrict}
                        onChange={(e) => setSearchDistrict(e.target.value)}
                        className="search-input form-control mb-3"
                    />
                    <button onClick={handleSearch} className="btn btn-primary mb-3">
                        Найти
                    </button>
                </div>
            </div>
 
            <div className="container">
                <div className="row justify-content-center">
                    {currentAnimals.length > 0 ? (
                        currentAnimals.map((animal, index) => (
                            <div className="col-md-6 mb-4" key={index}> {/* 2 карточки в ряду */}
                                <Card data={animal} className="card-custom" /> {/* Применяем стиль карточки */}
                            </div>
                        ))
                    ) : (
                        <p>Нет животных, соответствующих вашему запросу.</p>
                    )}
                </div>
            </div>
 
            {filteredPets.length > 0 && (
                <div className="pagination d-flex justify-content-center mt-4">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index + 1}
                            onClick={() => handlePageChange(index + 1)}
                            disabled={currentPage === index + 1}
                            className="pagination-button"
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
 
export default Search;