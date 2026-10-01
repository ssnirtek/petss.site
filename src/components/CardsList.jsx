import React, { useState, useEffect } from "react";
import Card from "../components/card"; // Убедитесь, что путь корректный

function CardsList() {
  const [pets, setPets] = useState([]); // Массив для хранения списка питомцев
  const [loading, setLoading] = useState(true); // Состояние для загрузки
  const [error, setError] = useState(null); // Состояние для ошибок

  useEffect(() => {
    // Функция для загрузки данных с API
    const loadPets = async () => {
      try {
        const response = await fetch("https://pets.сделай.site/api/pets");
        const result = await response.json();

        if (result.data && result.data.orders) {
          setPets(result.data.orders); // Обновляем состояние с данными
        } else {
          throw new Error("Некорректный формат данных");
        }

        setLoading(false);
      } catch (err) {
        console.error("Ошибка загрузки данных:", err);
        setError("Ошибка загрузки данных");
        setLoading(false);
      }
    };

    loadPets();
  }, []); // Пустой массив зависимостей - запрос выполняется один раз при монтировании

  if (loading) {
    return <div>Загрузка...</div>; // Сообщение о загрузке
  }

  if (error) {
    return <div className="text-danger">{error}</div>; // Сообщение об ошибке
  }

  return (
    <div className="container mt-4">
      <div className="row">
        {pets.map((pet) => (
          <div key={pet.id} className="col-md-6 col-lg-4 mb-4">
            <Card data={pet} /> {/* Передаем данные в компонент Card */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardsList;