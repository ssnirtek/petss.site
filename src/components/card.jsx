import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <Link
      to={`/card/${props.data.id}`} // Динамический маршрут для карточки
      state={{ data: props.data }} // Передача данных через state
      className="text-decoration-none text-dark"
    >
      <div 
        className="card border m-2 p-3 d-flex flex-column justify-content-between" 
        style={{ width: '100%', height: '850px' }}
      >
        <img
          src={`https://pets.сделай.site/${props.data.photos}`}
          className="card-img-top mx-auto"
          alt="рисунок животного"
          style={{
            maxHeight: '300px',
            maxWidth: '100%',
            objectFit: 'contain',
            borderRadius: '8px',
          }}
        />
        <div className="card-body">
          <p className="text-primary">id:</p>
          <p>{props.data.id}</p>
          <p className="text-primary">Вид животного:</p>
          <p>{props.data.kind}</p>
          <p className="text-primary">Описание:</p>
          <p>{props.data.description}</p>
          <p className="text-primary">Номер чипа:</p>
          <p>{props.data.mark}</p>
          <p className="text-primary">Район:</p>
          <p>{props.data.district}</p>
          <p className="text-primary">Дата:</p>
          <p>{props.data.date}</p>
        </div>
      </div>
    </Link>
  );
}

export default Card;