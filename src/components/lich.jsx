import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Lichn(props) {
  const navigate = useNavigate(); 

  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [isEditingPhone, setIsEditingPhone] = useState(false);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState('');

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

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('phone');
    alert('Вы вышли из личного кабинета.');
    navigate('/');
  };

  const updateEmail = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await fetch('https://pets.сделай.site/api/users/email', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', "Authorization": " Bearer "+localStorage.token },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('email', email);
        alert('Электронная почта успешно изменена!');
        setIsEditingEmail(false);
      } else {
        setError('Ошибка при обновлении такой адресс электронной почты уже существует ' + (data.message || ''));
      }
    } catch (error) {
      setError('Произошла ошибка на сервере: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const updatePhone = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await fetch('https://pets.сделай.site/api/users/phone', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', "Authorization": " Bearer "+localStorage.token },
        body: JSON.stringify({ phone }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('phone', phone);
        alert('Номер телефона успешно изменен!');
        setIsEditingPhone(false);
      } else {
        setError('Ошибка при обновлении такой номер телефона уже существует' + (data.message || ''));
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
                <button 
                  className="btn text-white ms-3" 
                  style={{ backgroundColor: '#000000' }} 
                  onClick={isEditingEmail ? updateEmail : () => setIsEditingEmail(true)}>
                  {isEditingEmail ? 'Сохранить' : 'Изменить'}
                </button>
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
                <button 
                  className="btn text-white ms-3" 
                  style={{ backgroundColor: '#000000' }} 
                  onClick={isEditingPhone ? updatePhone : () => setIsEditingPhone(true)}>
                  {isEditingPhone ? 'Сохранить' : 'Изменить'}
                </button>
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
      </div>
    </div>
  );
}

export default Lichn;