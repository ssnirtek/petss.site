import React from 'react';
import cossa from '../components/images/cossa.jpg';
import cat from '../components/images/cat.jpg';

function Karts2(props) {
    return (
        <div>
           
            <div className="d-flex flex-row flex-wrap justify-content-center">
             
                <div className="card m-3" style={{ width: '18rem', borderRadius: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
                    <img src={'https://pets.сделай.site/'+props.data.photos} className="card-img-top" alt="Кошка" style={{ borderTopLeftRadius: '15px', borderTopRightRadius: '15px', height: '300px', objectFit: 'cover' }} />
                    <div className="card-body">
                    <p className="card-text"><strong>id:</strong> {props.data.id}</p>
                    <p className="card-text"><strong>Вид животного:</strong> {props.data.kind}</p>
                        <p className="card-text"><strong>Описание:</strong> {props.data.description}</p>
                        <p className="card-text"><strong>Номер чипа:</strong> {props.data.mark}</p>
                        <p className="card-text"><strong>Район:</strong> {props.data.district}</p>
                        <p className="card-text"><strong>Дата:</strong> {props.data.date}</p>
                        <p className="card-text"><strong>Телефон:</strong> {props.data.phone}</p>
                        <p className="card-text"><strong>Регестрация:</strong> {props.data.registred}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Karts2;