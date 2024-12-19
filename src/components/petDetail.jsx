import React from 'react';

function PetDetail({ data }) {
  const photos = [
    data.photos1,
    data.photos2,
    data.photos3,
  ].filter(Boolean); // Оставляем только существующие изображения

  const photoUrl = photos.length > 0 
    ? `https://pets.сделай.site${photos[0]}` 
    : 'https://via.placeholder.com/300x200?text=No+Image'; // Заглушка

  return (
    <main className="container my-5">
      <div className="row align-items-center bg-light p-4 rounded shadow">
        <div className="col-md-6 text-center">
          <img src={photoUrl} className="img-fluid rounded" alt={data.mark || 'Животное'} />
        </div>
        <div className="col-md-6">
          <h2>{data.kind || 'Неизвестное животное'}</h2>
          <p>
            <strong>Описание:</strong> {data.description || 'Нет описания'}
          </p>
          <p>
            <strong>Клеймо:</strong> {data.mark || 'Нет информации'}
          </p>
          <p>
            <strong>Район:</strong> {data.district || 'Не указан'}
          </p>
          <p>
            <strong>Дата:</strong> {data.date || 'Неизвестно'}
          </p>
          <p>
            <strong>Телефон:</strong> {data.phone || 'Нет телефона'}
          </p>
          <p>
            <strong>Email:</strong> {data.email || 'Нет email'}
          </p>
          <button className="btn btn-primary btn-lg">
            Позвонить
          </button>
        </div>
      </div>
    </main>
  );
}

export default PetDetail;