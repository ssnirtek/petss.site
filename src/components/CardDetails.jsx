import React from "react";
import { useLocation } from "react-router-dom";

const CardDetails = () => {
  const location = useLocation();
  const { data } = location.state; // Данные передаются через state

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
        <p><strong>Имя владельца:</strong> {data.name || "Не указано"}</p> {/* Поле name */}
        <p><strong>Телефон владельца:</strong> {data.phone || "Не указан"}</p> {/* Поле phone */}
      </div>
    </div>
  );
};

export default CardDetails;