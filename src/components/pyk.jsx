import React, { useEffect, useState } from 'react';

function Lichn() {
  // Определение функции для сохранения данных
  const updateUserInfo = () => {
    // Логика для обновления данных пользователя
    console.log("Данные обновлены!");
    // Тут может быть код, который отправляет данные на сервер
  };

  // Функция для выхода
  const logout = () => {
    // Логика для выхода из аккаунта
    console.log("Пользователь вышел из системы!");
    // Здесь можно очистить токен или перенаправить пользователя на страницу входа
  };

  return (
    <div>
      <style dangerouslySetInnerHTML={{
        __html: `
          body {
            background-color: #f8f9fa;
          }
          .container {
            margin-top: 50px;
            background-color: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
          .form-control {
            margin-bottom: 15px;
          }
        `
      }} />
      <div className="container">
        <h2>Личный кабинет</h2>
        <div id="userInfo">
          <p><strong>Имя:</strong> <span id="userName">Иван Иванов</span></p>
          <p><strong>Телефон:</strong> <span id="userPhone">+7 (999) 123-45-67</span></p>
          <p><strong>Email:</strong> <span id="userEmail">ivan@example.com</span></p>
          <p><strong>Пароль:</strong> <span id="userPassword">********</span></p>
          <p><strong>Время регистрации:</strong> <span id="registrationTime">01.01.2023 12:00</span></p>
        </div>
        <h4>Редактировать данные</h4>
        <div className="mb-3">
          <label htmlFor="editPhone" className="form-label">Новый телефон</label>
          <input type="tel" className="form-control" id="editPhone" placeholder="+7 (999) 123-45-67" />
        </div>
        <div className="mb-3">
          <label htmlFor="editEmail" className="form-label">Новый Email</label>
          <input type="email" className="form-control" id="editEmail" placeholder="ivan@example.com" />
        </div>
        <button className="btn" style={{backgroundColor: '#bbc6c9'}} onClick={updateUserInfo}>Сохранить изменения</button>
        <hr />
        <button className="btn btn-dark" onClick={logout}>Выйти</button>
      </div>
    </div>
  );
}

export default Lichn;