import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import logo from '../components/images/logo.jpg';
import debounce from 'lodash.debounce';

// Login Component
const Login = () => {
  const [show, setShow] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const suggestionsRef = useRef(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true); // Функция для открытия модального окна

  const isActive = (path) => location.pathname === path;

  // Функция поиска
  const searchAnimals = useCallback(
    debounce(async (query) => {
      if (query.length < 3) {
        setSuggestions([]);
        return;
      }
      setLoading(true);
      try {
        const response = await fetch(`https://pets.сделай.site/api/search?query=${query}`);
        if (response.status === 200) {
          const result = await response.json();
          setSuggestions(result.data.orders || []);
        } else {
          setSuggestions([]);
        }
      } catch (error) {
        console.error('Ошибка поиска:', error);
        setSuggestions([]);
      } finally {
        setLoading(false);
      }
    }, 1000),
    []
  );

  // Отслеживание изменения поискового запроса
  useEffect(() => {
    if (searchQuery) {
      searchAnimals(searchQuery);
    } else {
      setSuggestions([]);
    }
  }, [searchQuery, searchAnimals]);

  // Закрытие предложений при клике вне области
  const handleClickOutside = (event) => {
    if (suggestionsRef.current && !suggestionsRef.current.contains(event.target)) {
      setSuggestions([]);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Header Component
  const Header = () => {
    return (
      <header>
        <h1 className='text-dark'>Поиск объявлений о потерянных животных</h1>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">
              <img src={logo} className="w-25 rounded-3" alt="logo" />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Переключатель навигации">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/" className={`nav-link ${isActive('/') ? 'disabled' : ''}`}>Главная</Link>
                </li>
                <li className="nav-item">
                  <Link to="/Accaunt" className={`nav-link ${isActive('/Accaunt') ? 'disabled' : ''}`}>Личный кабинет</Link>
                </li>
                <li className="nav-item">
                  <Link to="/Reg" className={`nav-link ${isActive('/Reg') ? 'disabled' : ''}`}>Регистрация</Link>
                </li>
                <li className="nav-item">
                  <Link to="/AnimalSearch" className={`nav-link ${isActive('/AnimalSearch') ? 'disabled' : ''}`}>Поиск по объявлениям</Link>
                </li>
                <li className="nav-item">
                  <Link to="/DobavPage" className={`nav-link ${isActive('/DobavPage') ? 'disabled' : ''}`}>Добавить объявление</Link>
                </li>
              </ul>
              <button type="button" className="btn m-2" onClick={handleShow} style={{ backgroundColor: '#bbc6c9' }}>
                Вход
              </button>
            </div>
          </div>
        </nav>
        <div className="d-flex align-items-center">
          {/* Поле ввода для поиска */}
          <div className="position-relative me-3" ref={suggestionsRef}>
            <input
              type="text"
              className="form-control"
              placeholder="Быстрый поиск..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery.length >= 3 && (
              <div className="position-absolute bg-white border mt-1 p-2 w-100" style={{ zIndex: 1000 }}>
                {loading ? (
                  <div>Загрузка...</div>
                ) : suggestions.length > 0 ? (
                  suggestions.map((item) => (
                    <div key={item.id} className="py-1 card border-0">
                      <Link to={`/pet/${item.id}`} className="text-decoration-none d-flex align-items-center" onClick={() => setSearchQuery('')}>
                        <div>
                          <div className="fw-bold">{item.description}</div>
                          <div className="text-muted">{item.kind}</div>
                        </div>
                      </Link>
                    </div>
                  ))
                ) : (
                  <div>Нет результатов</div>
                )}
              </div>
            )}
          </div>
        </div>
      </header>
    );
  };

  return (
    <>
      <Header />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: 'black' }}>Вход</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-start">
          <form id="form" noValidate>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label" style={{ color: 'black' }}>Email</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label" style={{ color: 'black' }}>Пароль</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                required
              />
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" htmlFor="exampleCheck1" style={{ color: 'black' }}>Запомнить меня</label>
            </div>
            <button type="submit" className="btn btn-primary">Войти</button>
          </form>
          <p className='text-danger text-center' id='error' style={{ display: 'none' }}>Ошибка входа</p>
          <p className='text-success text-center' id='success' style={{ display: 'none' }}>
            Вы вошли в аккаунт!
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Закрыть
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Login;
