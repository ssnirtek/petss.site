import React, { useState, useEffect } from 'react';

const Obv = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    district: '',
    kind: '',
    register: '0',
    password: '',
    passwordConfirmation: '',
    mark: '',
    description: '',
    photos1: null,
    photos2: null,
    photos3: null,
    confirm: false,
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
 
  useEffect(() => {
    const token = localStorage.getItem('token'); 
 
    if (token) {
      fetchUserData(token).then((data) => {
        if (data) {
          setFormData((prevData) => ({
            ...prevData,
            name: data.name,
            phone: data.phone,
            email: data.email,
          }));
        }
      });
    }
  }, []);
 
  const fetchUserData = async (token) => {
    try {
      const response = await fetch('https://pets.сделай.site/api/users', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
 
      if (response.status === 200) {
        return data;
      } else {
        throw new Error('Ошибка авторизации');
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  };
 
  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files : value,
    }));
  };
 
  const handleRegisterChange = (e) => {
    setIsRegistered(e.target.value === '1');
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Базовая валидация перед отправкой
    if (!formData.name || !formData.phone || !formData.email || !formData.photos1 || !formData.confirm) {
      setErrorMessage('Пожалуйста, заполните все обязательные поля.');
      return;
    }
  
    // Проверка на наличие хотя бы одного фото
    if (!formData.photos1 || formData.photos1.length === 0) {
      setErrorMessage('Пожалуйста, добавьте хотя бы одно изображение.');
      return;
    }
  
    // Проверка на совпадение паролей, если регистрация включена
    if (isRegistered && formData.password !== formData.passwordConfirmation) {
      setErrorMessage('Пароли не совпадают.');
      return;
    }
  
    // Создаем объект FormData для отправки данных в формате multipart/form-data
    const form = new FormData();
    form.append('name', formData.name);
    form.append('phone', formData.phone);
    form.append('email', formData.email);
    form.append('district', formData.district);
    form.append('kind', formData.kind);
  
    if (isRegistered) {
      form.append('password', formData.password);
      form.append('password_confirmation', formData.passwordConfirmation);
    }
  
    form.append('confirm', formData.confirm ? 1 : 0);
    form.append('mark', formData.mark);
    form.append('description', formData.description);
  
    // Добавляем файлы, только если они существуют
    if (formData.photos1 && formData.photos1.length > 0) {
      form.append('photos1', formData.photos1[0]);
    }
    if (formData.photos2 && formData.photos2.length > 0) {
      form.append('photos2', formData.photos2[0]);
    }
    if (formData.photos3 && formData.photos3.length > 0) {
      form.append('photos3', formData.photos3[0]);
    }
  
    try {
      // Отправляем запрос на API
      const response = await fetch('https://pets.сделай.site/api/pets', {
        method: 'POST',
        body: form,
      });
  
      // Парсим JSON-ответ
      const data = await response.json();
      console.log(response);
      if (response.status === 200) {
        // Успех: показываем сообщение об успешной отправке
        setSuccessMessage('Объявление успешно добавлено!');
        setErrorMessage('');
      } else {
        // Ошибка: показываем сообщения об ошибках валидации
        // Преобразуем объект ошибок в строку
        const errorMessages = Object.values(data.error.errors).flat().join(', ');
        setErrorMessage(errorMessages || 'Произошла ошибка.');
        setSuccessMessage('');
      }
    } catch (error) {
      // Обработка ошибок сети или других ошибок
      setErrorMessage('Произошла ошибка при отправке данных.');
      setSuccessMessage('');
    }
  };
  return (
    <main className="container mt-4">
      <h1>Добавление нового объявления</h1>
      <form id="addPetForm" className="needs-validation" onSubmit={handleSubmit} noValidate>
        {/* User Name */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Имя пользователя</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            pattern="[а-яА-ЯёЁ\s\-]+"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <div className="invalid-feedback">Введите корректное имя (только кириллица, пробелы, дефисы).</div>
        </div>
 
        {/* Phone */}
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Телефон</label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
          <div className="invalid-feedback">Введите корректный номер телефона (только цифры и знак +).</div>
        </div>
 
        {/* Email */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Электронная почта</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <div className="invalid-feedback">Введите корректный адрес электронной почты.</div>
        </div>
 
        {/* District */}
        <div className="mb-3">
          <label htmlFor="district" className="form-label">Район</label>
          <input
            type="district"
            className="form-control"
            id="district"
            name="district"
            value={formData.district}
            onChange={handleInputChange}
            required
          />
        </div>
 
        {/* Kind */}
        <div className="mb-3">
          <label htmlFor="kind" className="form-label">Вид животного</label>
          <input
            type="kind"
            className="form-control"
            id="kind"
            name="kind"
            value={formData.kind}
            onChange={handleInputChange}
            required
          />
        </div>
 
        {/* Register Option */}
        <div className="mb-3">
          <label htmlFor="register" className="form-label">Автоматическая регистрация</label>
          <select
            className="form-select"
            id="register"
            name="register"
            value={isRegistered ? '1' : '0'}
            onChange={handleRegisterChange}
            required
          >
            <option value="0">Нет</option>
            <option value="1">Да</option>
          </select>
        </div>
 
        {/* Password Fields */}
        {isRegistered && (
          <div id="passwordFields">
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Пароль</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{7,}"
                title="Пароль должен содержать минимум 7 символов, включая одну заглавную букву, одну строчную букву и одну цифру."
                value={formData.password}
                onChange={handleInputChange}
              />
              <div className="invalid-feedback">Пароль должен соответствовать требованиям.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="password_confirmation" className="form-label">Подтверждение пароля</label>
              <input
                type="password"
                className="form-control"
                id="password_confirmation"
                name="passwordConfirmation"
                value={formData.passwordConfirmation}
                onChange={handleInputChange}
              />
              <div className="invalid-feedback">Пароли должны совпадать.</div>
            </div>
          </div>
        )}
 
        {/* Photos */}
        <div className="mb-3">
          <label htmlFor="photos1" className="form-label">Фото 1 (обязательно)</label>
          <input
            type="file"
            className="form-control"
            id="photos1"
            name="photos1"
            onChange={handleInputChange}
            required
          />
          <div className="invalid-feedback">Добавьте хотя бы одно изображение.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="photos2" className="form-label">Фото 2</label>
          <input
            type="file"
            className="form-control"
            id="photos2"
            name="photos2"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="photos3" className="form-label">Фото 3</label>
          <input
            type="file"
            className="form-control"
            id="photos3"
            name="photos3"
            onChange={handleInputChange}
          />
        </div>
 
        {/* Mark */}
        <div className="mb-3">
          <label htmlFor="mark" className="form-label">Клеймо</label>
          <input
            type="text"
            className="form-control"
            id="mark"
            name="mark"
            value={formData.mark}
            onChange={handleInputChange}
          />
        </div>
 
        {/* Description */}
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Описание</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            rows="4"
            value={formData.description}
            onChange={handleInputChange}
          ></textarea>
        </div>
 
        {/* Confirm */}
        <div className="mb-3 form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="confirm"
            name="confirm"
            checked={formData.confirm}
            onChange={handleInputChange}
            value="1"
            required
          />
          <label className="form-check-label" htmlFor="confirm">
            Согласен на обработку персональных данных
          </label>
          <div className="invalid-feedback">Необходимо согласиться на обработку данных.</div>
        </div>
 
        {/* Error or Success Messages */}
        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
        {successMessage && <div className="alert alert-success">{successMessage}</div>}
 
        <button type="submit" className="btn btn-dark">Добавить объявление</button>
      </form>
    </main>
  );
};

export default Obv;
