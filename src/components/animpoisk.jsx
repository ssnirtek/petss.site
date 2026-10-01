import React, { useState } from 'react';
import AnimalCard from './animalpoisk'; // Импортируем компонент AnimalCard

import cat from '../components/images/kity.jpg';
import osel from '../components/images/osel.jpg';
import ocel2 from '../components/images/ocel2.jpg';
import krol from '../components/images/krol.jpg';
import black from '../components/images/black.jpg';
import whit from '../components/images/whit.jpg';

// Исходные данные
const animals = [
  { image: cat, kind: 'Кошка', description: 'Потерялась пушистая кошка. Очень ласковая, серая.', mark: 'ca-001-spb', district: 'Василеостровский', date: '24-03-2020' },
  { image: osel, kind: 'Ослик', description: 'Ослик потерялся в центральном районе. Беленький, маленький.', mark: 'go-011-spb', district: 'Центральный', date: '14-03-2022' },
  { image: ocel2, kind: 'Ослик', description: 'Ослик был найден под деревом, хозяин, отзовись.', mark: 'go-012-spb', district: 'Приморский', date: '12-08-2022' },
  { image: krol, kind: 'Кролик', description: 'Кролик ищет хозяина, живет рядом с приморским районом.', mark: 'go-141-spb', district: 'Приморский', date: '14-01-2023' },
  { image: black, kind: 'Песик', description: 'Черненький песик. Найден на лавочке.', mark: 'go-211-spb', district: 'Центральный', date: '11-12-2022' },
  { image: whit, kind: 'Песик', description: 'Чернено-беленький песик. Найден около 34 дома.', mark: 'go-221-spb', district: 'Центральный', date: '10-12-2022' }
];

const AnimalCardsContainer = () => {
  // Состояние для пагинации
  const [currentPage, setCurrentPage] = useState(1);
  const [region, setRegion] = useState('');
  const [animalType, setAnimalType] = useState('');
  
  // Параметры пагинации
  const animalsPerPage = 2;

  // Фильтрация животных по району и виду
  const filteredAnimals = animals.filter(animal => {
    const regionMatch = region ? animal.district.toLowerCase().includes(region.toLowerCase()) : true;
    const typeMatch = animalType ? animal.kind.toLowerCase().includes(animalType.toLowerCase()) : true;
    return regionMatch && typeMatch;
  });

  // Расчёт нужных животных для отображения на текущей странице
  const indexOfLastAnimal = currentPage * animalsPerPage;
  const indexOfFirstAnimal = indexOfLastAnimal - animalsPerPage;
  const currentAnimals = filteredAnimals.slice(indexOfFirstAnimal, indexOfLastAnimal);

  // Изменение страницы
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Общее количество страниц
  const totalPages = Math.ceil(filteredAnimals.length / animalsPerPage);

  return (
    <div>
      <div className="search-box">
        <h3>Поиск</h3>
        <input
          type="text"
          placeholder="Район"
          value={region}
          onChange={(e) => setRegion(e.target.value)} // Обновление состояния для района
        />
        <input
          type="text"
          placeholder="Вид животного"
          value={animalType}
          onChange={(e) => setAnimalType(e.target.value)} // Обновление состояния для типа животного
        />
      </div>

      {/* Выводим фильтрованные карточки животных */}
      <div className="d-flex flex-row flex-wrap justify-content-center" id="animal-card">
        {currentAnimals.map((animal, index) => (
          <AnimalCard key={index} data={animal} />
        ))}
      </div>

      {/* Пагинация */}
      <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        paginate={paginate} 
      />
    </div>
  );
};

// Компонент пагинации
const Pagination = ({ currentPage, totalPages, paginate }) => {
  return (
    <nav aria-label="Пример навигации по страницам">
      <ul className="pagination text-dark text-center" style={{ marginLeft: 1200, borderColor: '#bbc6c9'}}>
        <li className="page-item">
          <a 
            className="page-link text-dark" 
            href="#"
            onClick={() => paginate(currentPage - 1)} 
            disabled={currentPage === 1}
          >
            Предыдущая
          </a>
        </li>
        {Array.from({ length: totalPages }, (_, index) => (
          <li key={index + 1} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
            <a 
              className="page-link text-dark" 
              href="#"
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a 
            className="page-link text-dark" 
            href="#"
            onClick={() => paginate(currentPage + 1)} 
            disabled={currentPage === totalPages}
          >
            Следующая
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default AnimalCardsContainer;
