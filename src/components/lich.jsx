import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Lichn(props) {
  const navigate = useNavigate(); // Инициализируем хук навигации

  // Состояния для редактирования email и номера телефона
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [isEditingPhone, setIsEditingPhone] = useState(false);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // Стейт для загрузки и ошибок
  const [loading, setLoading] = useState(false); // Один стейт для обоих полей
  const [error, setError] = useState('');

  // Восстановление значений из localStorage при загрузке компонента
  useEffect(() => {
    const savedEmail = localStorage.getItem('email');
    const savedPhone = localStorage.getItem('phone');

    if (savedEmail) {
      setEmail(savedEmail);
    } else {
      setEmail(props.data.email);
    }

    if (savedPhone) {
      setPhone(savedPhone);
    } else {
      setPhone(props.data.phone);
    }
  }, [props.data.email, props.data.phone]);

  // Функция для выхода из аккаунта
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('phone');
    alert('Вы вышли из личного кабинета.');
    navigate('/');
  };

  // Функция для отправки изменений на сервер
  const updateUserData = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await fetch('https://pets.сделай.site/api/pets/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, phone }),
      });

      // Логируем ответ от сервера
      const data = await response.json();
      console.log(data);  // Логируем полный ответ от сервера для диагностики

      if (response.ok) {  // Проверяем успешность HTTP статуса
        if (data.success) {
          // Если запрос успешный, сохраняем данные в localStorage
          localStorage.setItem('email', email);
          localStorage.setItem('phone', phone);
          alert('Данные успешно изменены!');
          setIsEditingEmail(false);
          setIsEditingPhone(false);
        } else {
          setError('Ошибка при обновлении данных: ' + (data.message || ''));
        }
      } else {
        setError('Ошибка на сервере: ' + (data.message || 'Неизвестная ошибка'));
      }
    } catch (error) {
      setError('Произошла ошибка на сервере: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="m-5">
      <h1 className="card-title text-center mb-4">Добро пожаловать</h1>

      <div className="container" style={{ maxWidth: '1000px', border: '2px solid #ddd', borderRadius: '10px', padding: '30px', backgroundColor: '#bbc6c9' }}>
        <table className="table">
          <tbody>
            <tr>
              <td className="text-dark" style={{ width: '300px' }}>Имя:</td>
              <td>{props.data.name}</td>
            </tr>
            <tr>
              <td className="text-dark">Дата регистрации:</td>
              <td>{props.data.registrationDate}</td>
            </tr>
            <tr>
              <td className="text-dark">Электронная почта:</td>
              <td>
                {!isEditingEmail ? (
                  <span>{email}</span>
                ) : (
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                  />
                )}
              </td>
            </tr>
            <tr>
              <td className="text-dark">Номер телефона:</td>
              <td>
                {!isEditingPhone ? (
                  <span>{phone}</span>
                ) : (
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="form-control"
                  />
                )}
              </td>
            </tr>
            <tr>
              <td className="text-dark">Количество объявлений:</td>
              <td>{props.data.countOrder}</td>
            </tr>
            <tr>
              <td className="text-dark">Количество животных:</td>
              <td>{props.data.countPets}</td>
            </tr>
          </tbody>
        </table>

        {/* Ошибка */}
        {error && <div className="alert alert-danger text-center">{error}</div>}

        <hr />

        <div className="text-center mt-3">
          <button className="btn text-white" style={{ backgroundColor: '#8B0000' }} onClick={handleLogout}>Выйти</button>
        </div>

        {/* Кнопки редактирования */}
        <div className="text-center mt-3">
          {!isEditingEmail && !isEditingPhone && (
            <>
              <button className="btn text-white" style={{ backgroundColor: '#000000' }} onClick={() => setIsEditingEmail(true)}>Изменить почту</button>
              <button className="btn text-white ms-3" style={{ backgroundColor: '#000000' }} onClick={() => setIsEditingPhone(true)}>Изменить телефон</button>
            </>
          )}
        </div>

        {/* Сохранение данных (email и phone) */}
        {(isEditingEmail || isEditingPhone) && (
          <div className="text-center mt-3">
            <button className="btn btn-success" onClick={updateUserData} disabled={loading}>
              {loading ? 'Сохраняем...' : 'Сохранить данные'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Lichn;
