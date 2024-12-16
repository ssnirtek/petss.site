import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Obv = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    password_confirmation: '',
    register: false,
    photo1: null,
    photo2: null,
    photo3: null,
    mark: '',
    description: '',
    confirm: false,
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files : value,
    }));
  };

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    // Валидация имени
    if (!formData.name || !/^[А-Яа-яёЁ\s\-]+$/.test(formData.name)) {
      formErrors.name = 'Имя должно содержать только кириллицу, пробелы и дефисы.';
      isValid = false;
    }

    // Валидация телефона
    if (!formData.phone || !/^\+?\d+$/.test(formData.phone)) {
      formErrors.phone = 'Номер телефона должен содержать только цифры и знак +.';
      isValid = false;
    }

    // Валидация email
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Неверный формат email.';
      isValid = false;
    }

    // Валидация пароля и его подтверждения
    if (formData.register) {
      if (!formData.password) {
        formErrors.password = 'Пароль обязателен.';
        isValid = false;
      } else if (formData.password.length < 7 || !/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/.test(formData.password)) {
        formErrors.password = 'Пароль должен содержать не менее 7 символов, включая 1 цифру, 1 строчную и 1 заглавную букву.';
        isValid = false;
      }

      if (formData.password !== formData.password_confirmation) {
        formErrors.password_confirmation = 'Пароли не совпадают.';
        isValid = false;
      }
    }

    // Валидация подтверждения обработки персональных данных
    if (!formData.confirm) {
      formErrors.confirm = 'Необходимо подтвердить согласие на обработку персональных данных.';
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setErrorMessage('Пожалуйста, исправьте ошибки в форме.');
      return;
    }

    setErrorMessage('');
    setSuccessMessage('');

    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('email', formData.email);
    if (formData.register) {
      formDataToSend.append('password', formData.password);
      formDataToSend.append('password_confirmation', formData.password_confirmation);
    }
    formDataToSend.append('confirm', formData.confirm ? 1 : 0);
    formDataToSend.append('mark', formData.mark);
    formDataToSend.append('description', formData.description);
    if (formData.photo1) formDataToSend.append('photo1', formData.photo1[0]);
    if (formData.photo2) formDataToSend.append('photo2', formData.photo2[0]);
    if (formData.photo3) formDataToSend.append('photo3', formData.photo3[0]);

    try {
      const response = await fetch('https://pets.сделай.site/api/pets', {
        method: 'POST',
        body: formDataToSend,
      });

      const result = await response.json();

      if (response.ok) {
        setSuccessMessage('Объявление успешно добавлено.');
        navigate('/'); // Перенаправление на главную страницу
      } else {
        setErrorMessage(result.error?.message || 'Ошибка при добавлении объявления.');
        if (result.error?.errors) {
          setErrors(result.error.errors);
        }
      }
    } catch (error) {
      setErrorMessage('Ошибка при отправке данных.');
    }
  };

  return (
    <div className="container">
      <h2>Добавить объявление</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        {successMessage && <div className="alert alert-success">{successMessage}</div>}
        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

        {/* Поля формы */}
        <div className="form-group">
          <label>Имя:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-control"
          />
          {errors.name && <small className="form-text text-danger">{errors.name}</small>}
        </div>

        <div className="form-group">
          <label>Телефон:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="form-control"
          />
          {errors.phone && <small className="form-text text-danger">{errors.phone}</small>}
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
          />
          {errors.email && <small className="form-text text-danger">{errors.email}</small>}
        </div>

        <div className="form-group">
          <label>Фото 1:</label>
          <input
            type="file"
            name="photo1"
            onChange={handleChange}
            className="form-control"
            required
          />
          {errors.photo1 && <small className="form-text text-danger">{errors.photo1}</small>}
        </div>

        <div className="form-group">
          <label>Фото 2:</label>
          <input
            type="file"
            name="photo2"
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label>Фото 3:</label>
          <input
            type="file"
            name="photo3"
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label>Описание:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label>Кличка:</label>
          <input
            type="text"
            name="mark"
            value={formData.mark}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        

        <div className="form-group">
          <label>
            <input
              type="checkbox"
              name="confirm"
              checked={formData.confirm}
              onChange={handleChange}
              required
            />
            Подтверждаю согласие на обработку персональных данных
          </label>
          {errors.confirm && <small className="form-text text-danger">{errors.confirm}</small>}
        </div>
        <br></br>
        <button type="submit" className="btn" style={{ backgroundColor: '#bbc6c9' }}>
          Добавить объявление
        </button>
      </form>
    </div>
  );
};

export default Obv;
