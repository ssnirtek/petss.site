import React from 'react';
import { useNavigate } from 'react-router-dom';  // Импортируем хук useNavigate

function MyButton() {
  const navigate = useNavigate();  // Получаем функцию navigate для перехода

  const handleClick = () => {
    navigate('/DobavPage');  // Указываем путь к странице, на которую нужно перейти
  };

  return (
    <button className="btn btn-dark" style={{ margin: '30px' }} onClick={handleClick}>
      Добавить объявление
    </button>
  );
}

export default MyButton;