import React from 'react';
import { useNavigate } from 'react-router-dom';  // Импортируем хук useNavigate

function ButtonReg() {
  const navigate = useNavigate();  // Получаем функцию navigate для перехода

  const handleClick = () => {
    navigate('/Reg');  // Указываем путь к странице, на которую нужно перейти
  };

  return (
    <div style={styles.container}>
      <button className="btn btn-dark" style={styles.button} onClick={handleClick}>
        Зарегистрироваться
      </button>
    </div>
  );
}

// Стили для компонента
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',  // Центрируем по горизонтали
    alignItems: 'center',  // Центрируем по вертикали
    height: '20vh',  // Занимаем всю высоту экрана
  },
  button: {
    width: '10ё    00px',  // Ширина кнопки
    padding: '15px',  // Внутренние отступы для кнопки
    fontSize: '20px',  // Размер шрифта
  },
};

export default ButtonReg;
