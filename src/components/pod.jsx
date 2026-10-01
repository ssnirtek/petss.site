import React, { useState } from "react";

function Pod() {
  const [email, setEmail] = useState(""); // Состояние для email
  const [message, setMessage] = useState(""); // Сообщение об ошибке или успехе
  const [loading, setLoading] = useState(false); // Состояние для загрузки
  const [error, setError] = useState(null); // Состояние для ошибки

  const handleSubmit = async (e) => {
    e.preventDefault(); // Предотвращаем перезагрузку страницы при отправке формы

    if (!email) {
      setError("Пожалуйста, введите адрес электронной почты.");
      return;
    }

    setLoading(true);
    setError(null); // Сброс ошибки перед новым запросом
    setMessage(""); // Сброс сообщения

    try {
      const response = await fetch("https://pets.сделай.site/api/subscription", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.status === 204) {
        setMessage("Вы успешно подписались на новости!");
      } else if (response.status === 422) {
        const data = await response.json();
        setError(data.error.message || "Ошибка валидации данных.");
      } else {
        setError("Произошла ошибка при подписке.");
      }
    } catch (error) {
      setError("Произошла ошибка при подключении к серверу.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-center text-dark m-2" style={{ backgroundColor: "#bbc6c9" }}>
        Подписка на новости
      </h2>
      <form className="w-50 m-auto p-3" style={{ minWidth: 300 }} onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Введите адрес электронной почты
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-describedby="emailHelp"
            required
          />
          <div id="emailHelp" className="form-text">
            Мы никогда не делимся Вашими e-mail ни с кем.
          </div>
        </div>

        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}

        {message && (
          <div className="alert alert-success" role="alert">
            {message}
          </div>
        )}

        <button type="submit" className="btn" style={{ backgroundColor: "#bbc6c9" }} disabled={loading}>
          {loading ? "Подписка..." : "Подписаться"}
        </button>
      </form>
    </div>
  );
}

export default Pod;
