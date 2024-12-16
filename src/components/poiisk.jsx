import React, { useState, useEffect } from 'react';

function Poissski() {
  // Состояния для ввода данных
  const [region, setRegion] = useState('');
  const [animalType, setAnimalType] = useState('');
  const [suggestions, setSuggestions] = useState([]); // Подсказки с сервера
  const [ads, setAds] = useState([]); // Объявления
  const [loading, setLoading] = useState(false); // Статус загрузки
  const [error, setError] = useState(null); // Ошибки
  const [debouncedQuery, setDebouncedQuery] = useState(''); // Для debounce
  const [page, setPage] = useState(1); // Страница пагинации
  const [totalPages, setTotalPages] = useState(1); // Общее количество страниц

  // debounce функция для отсрочки запроса
  useEffect(() => {
    if (debouncedQuery.length > 3) {
      fetchSuggestions(debouncedQuery);
    } else {
      setSuggestions([]); // Очистить подсказки, если меньше 3 символов
    }
  }, [debouncedQuery]);

  const debounceSearch = (query) => {
    setLoading(true);
    setDebouncedQuery(query);
  };

  const fetchSuggestions = async (query) => {
    try {
      const response = await fetch(`https://pets.сделай.site/api/search?query=${query}`);
      const data = await response.json();

      if (response.status === 200) {
        setSuggestions(data.data.orders || []);
      } else {
        setSuggestions([]);
      }
    } catch (error) {
      setError('Ошибка при загрузке подсказок.');
    } finally {
      setLoading(false);
    }
  };

  const searchAds = async () => {
    if (!region && animalType.length < 3) {
      setError('Введите хотя бы один параметр для поиска.'); // Если нет параметров, показываем ошибку
      return;
    }

    setLoading(true);
    const query = new URLSearchParams();
    if (region) query.set('district', region); // Добавляем параметр для района, если он есть
    if (animalType) query.set('kind', animalType); // Добавляем параметр для вида животного, если он есть
    query.set('page', page); // Параметр для пагинации
    query.set('limit', 10); // Ограничение на 10 животных на странице

    try {
      const response = await fetch(`https://pets.сделай.site/api/search?${query.toString()}`);
      const data = await response.json();

      if (response.status === 200) {
        setAds(data.data.orders || []);
        setTotalPages(data.data.totalPages || 1); // Пример, если сервер возвращает общее количество страниц
      } else {
        setAds([]);
        setError('Нет результатов для данного запроса.');
      }
    } catch (error) {
      setError('Ошибка при выполнении поиска.');
    } finally {
      setLoading(false);
    }
  };

  // Обработчик изменения страницы пагинации
  const changePage = (newPage) => {
    setPage(newPage);
    searchAds(); // Выполняем поиск при смене страницы
  };

  return (
    <main>
      <div className="search-box">
        <h3>Поиск</h3>
        <input
          type="text"
          id="regionInput"
          placeholder="Район"
          value={region}
          onChange={(e) => setRegion(e.target.value)} // Обновление состояния для района
        />
        <input
          type="text"
          id="animalTypeInput"
          placeholder="Вид животного"
          value={animalType}
          onChange={(e) => {
            setAnimalType(e.target.value); // Обновление состояния для типа животного
            debounceSearch(e.target.value); // Запуск дебаунс функции
          }}
        />
        <button onClick={searchAds} style={{ backgroundColor: '#bbc6c9' }}>
          Найти
        </button>

        {/* Подсказки с сервера */}
        {animalType.length > 3 && suggestions.length > 0 && (
          <div className="suggestions-box">
            {suggestions.map((suggestion, index) => (
              <div key={index} className="suggestion-item">
                <strong>{suggestion.kind}</strong> - {suggestion.description}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Вывод объявлений */}
      <div id="adsContainer" className="row">
        {ads.length > 0 ? (
          ads.map((ad) => (
            <div key={ad.id} className="col-12 col-md-4">
              <div className="ad-item">
                <img src={ad.photos} alt={ad.kind} />
                <h5>{ad.kind}</h5>
                <p>{ad.description}</p>
                <p><strong>Клеймо:</strong> {ad.mark}</p>
                <p><strong>Район:</strong> {ad.district}</p>
                <p><strong>Дата:</strong> {ad.date}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="no-results">
            <p>{error || 'Нет результатов для данного запроса.'}</p>
          </div>
        )}
      </div>

      {/* Статус загрузки */}
      {loading && <div>Загрузка...</div>}

      {/* Сообщение об ошибке */}
      {error && <div className="error-message">{error}</div>}

      {/* Пагинация */}
      {ads.length > 0 && (
        <div className="pagination">
          <button
            disabled={page <= 1}
            onClick={() => changePage(page - 1)}
          >
            Предыдущая
          </button>
          <span>{`Страница ${page} из ${totalPages}`}</span>
          <button
            disabled={page >= totalPages}
            onClick={() => changePage(page + 1)}
          >
            Следующая
          </button>
        </div>
      )}
    </main>
  );
}

export default Poissski;
