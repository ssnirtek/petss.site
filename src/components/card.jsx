import { useNavigate } from "react-router-dom";
import DetailsPage from "../pages/details";
function Card(props) {
    const navigate = useNavigate();
 
    const handleCardClick = () => {
        // Переход на страницу деталей с использованием ID карточки
        navigate(`/details/${props.data.id}`);
    };
 
    return (
        <div 
            className="card border m-2 p-3 d-flex flex-column justify-content-between" 
            style={{ width: '100%', height: '850px', cursor: 'pointer' }}
            onClick={handleCardClick} // Обработчик клика
        >
            <img 
                src={`https://pets.сделай.site/${props.data.photos}`} 
                className="card-img-top mx-auto" 
                alt="рисунок животного" 
                style={{ maxHeight: '300px', objectFit: 'cover', width: 'auto' }} 
            />
            <div className="card-body">
                <h5 className="card-title text-center text-primary">
                    {props.data.kind} {/* Название карточки */}
                </h5>
                <p className="text-primary">id:</p>
                <p>{props.data.id}</p>
                <p className="text-primary">Описание:</p>
                <p>{props.data.description}</p>
                <p className="text-primary">Номер чипа:</p>
                <p>{props.data.mark}</p>
                <p className="text-primary">Район:</p>
                <p>{props.data.district}</p>
                <p className="text-primary">Дата:</p>
                <p>{props.data.date}</p>
            </div>
        </div>
    );
}

export default Card;
