import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

const CardDetails = () => {
  const { id } = useParams(); // Извлекаем id из URL
  const location = useLocation(); // Получаем переданные через state данные
  const [data, setData] = useState(location.state?.data || null); // Используем данные из state или null
  const [loading, setLoading] = useState(!data); // Если данных нет, включаем загрузку
  const [error, setError] = useState(null);

  useEffect(() => {
    // Если данные уже есть, запрос не нужен
    if (data) return;

    const fetchPetDetails = async () => {
      try {
        const response = await fetch(`https://pets.сделай.site/api/pets/${id}`);
        const result = await response.json();

        if (result.data) {
          setData(result.data);
        } else {
          throw new Error("Данные не найдены");
        }
        setLoading(false);
      } catch (err) {
        console.error("Ошибка загрузки данных:", err);
        setError("Ошибка загрузки данных");
        setLoading(false);
      }
    };

    fetchPetDetails();
  }, [id, data]);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div className="text-danger">{error}</div>;
  }

  if (!data) {
    return <div>Питомец не найден</div>;
  }

  return (
    <div className="container mt-5">
      <h1>Детали карточки</h1>
      <div className="card border p-4">
        <img
          src={`https://pets.сделай.site/${data.photos}`}
          alt="рисунок животного"
          style={{ maxHeight: "400px", objectFit: "contain", width: "100%" }}
          className="mb-3"
        />
        <p><strong>ID:</strong> {data.id}</p>
        <p><strong>Вид животного:</strong> {data.kind}</p>
        <p><strong>Описание:</strong> {data.description}</p>
        <p><strong>Номер чипа:</strong> {data.mark}</p>
        <p><strong>Район:</strong> {data.district}</p>
        <p><strong>Дата:</strong> {data.date}</p>
        <p><strong>Имя владельца:</strong> {data.name || "Не указано"}</p>
        <p><strong>Телефон владельца:</strong> {data.phone || "Не указан"}</p>
      </div>
    </div>
  );
};

export default CardDetails;