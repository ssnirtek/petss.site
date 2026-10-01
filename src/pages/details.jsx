import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import React from "react";
 
function DetailsPage() {
    const { id } = useParams(); // Получаем ID из URL
    const [petDetails, setPetDetails] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
 
    useEffect(() => {
        // Загружаем данные конкретной карточки
        fetch(`https://pets.сделай.site/api/pets`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Ошибка загрузки данных");
                }
                return response.json();
            })
            .then((result) => {
                const pet = result.data.orders.find((item) => item.id.toString() === id);
                if (pet) {
                    setPetDetails(pet);
                } else {
                    setError("Карточка с таким ID не найдена");
                }
            })
            .catch((err) => setError(err.message))
            .finally(() => setIsLoading(false));
    }, [id]);
 
    if (isLoading) {
        return <p>Загрузка...</p>;
    }
 
    if (error) {
        return <p>Ошибка: {error}</p>;
    }
 
    if (!petDetails) {
        return <p>Информация о карточке отсутствует.</p>;
    }
 
    return (
        <div className="container mt-4">
            <div className="card border p-4">
                <img 
                    src={`https://pets.сделай.site/${petDetails.photos}`} 
                    className="card-img-top mx-auto" 
                    alt="рисунок животного" 
                    style={{ maxHeight: '300px', objectFit: 'cover', width: 'auto' }} 
                />
                <div className="card-body">
                    <h5 className="card-title">{petDetails.kind}</h5>
                    <p><strong>Описание:</strong> {petDetails.description}</p>
                    <p><strong>Номер чипа:</strong> {petDetails.mark}</p>
                    <p><strong>Район:</strong> {petDetails.district}</p>
                    <p><strong>Дата:</strong> {petDetails.date}</p>
                    <p><strong>Телефон:</strong> {petDetails.phone || "Не указано"}</p>
                    <p><strong>Имя владельца:</strong> {petDetails.name || "Не указано"}</p>
                </div>
            </div>
        </div>
    );
}
 
export default DetailsPage;