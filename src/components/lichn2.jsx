import cat from '../components/images/cat.jpg';
import cossa from '../components/images/cossa.jpg';
import pes from '../components/images/pes.jpg';

function Lichn2() {
  return (
    <div>
      <br />
      <div className="row row-cols-1 row-cols-md-3 g-4" style={{ marginLeft: 60, marginRight: 60 }}>
        <div className="col">
          <div className="card h-100">
            <img src={cat} className="card-img-top" alt="Кошечка" />
            <div className="card-body">
              <h5 className="card-title">Кошечка</h5>
              {/* Кнопки в одном контейнере */}
              <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                <div className="btn-group me-2" role="group" aria-label="First group">
                  <input type="radio" className="btn-check" name="btnradio1" data-bs-toggle="modal" data-bs-target="#staticBackdrop1" id="btnradio1" autoComplete="off" defaultChecked />
                  <label className="btn btn-outline-dark" style={{ backgroundColor: '#bbc6c9' }} htmlFor="btnradio1">Подробнее</label>
                </div>
                <div className="btn-group me-2" role="group" aria-label="Second group">
                  <input type="radio" className="btn-check" name="btnradio1" id="btnradio2" autoComplete="off" />
                  <label className="btn btn-outline-dark" style={{ backgroundColor: '#bbc6c9' }} htmlFor="btnradio2">Редактировать</label>
                </div>
                <div className="btn-group" role="group" aria-label="Third group">
                  <input type="radio" className="btn-check" name="btnradio1" id="btnradio3" autoComplete="off" />
                  <label className="btn btn-outline-dark" style={{ backgroundColor: '#bbc6c9' }} htmlFor="btnradio3">Удалить</label>
                </div>
              </div>

              {/* Модальное окно */}
              <div className="modal fade" id="staticBackdrop1" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel1" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="staticBackdropLabel1">Кошечка</h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Закрыть" />
                    </div>
                    <div className="modal-body">
                      ID: 14<br />
                      Вид животного: Кошка<br />
                      Описание: Потерялась кошка, пушистая, серая. Любит играть, ласковая.<br />
                      Номер чипа: ca-001-spb<br />
                      Район: Василиостровский<br />
                      Дата: 24-03-2020 <br />
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100">
            <img src={cossa} className="card-img-top" alt="Коза" />
            <div className="card-body">
              <h5 className="card-title">Коза</h5>
              {/* Кнопки в одном контейнере */}
              <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                <div className="btn-group me-2" role="group" aria-label="First group">
                  <input type="radio" className="btn-check" name="btnradio2" data-bs-toggle="modal" data-bs-target="#staticBackdrop2" id="btnradio1" autoComplete="off" defaultChecked />
                  <label className="btn btn-outline-dark" style={{ backgroundColor: '#bbc6c9' }} htmlFor="btnradio1">Подробнее</label>
                </div>
                <div className="btn-group me-2" role="group" aria-label="Second group">
                  <input type="radio" className="btn-check" name="btnradio2" id="btnradio2" autoComplete="off" />
                  <label className="btn btn-outline-dark" style={{ backgroundColor: '#bbc6c9' }} htmlFor="btnradio2">Редактировать</label>
                </div>
                <div className="btn-group" role="group" aria-label="Third group">
                  <input type="radio" className="btn-check" name="btnradio2" id="btnradio3" autoComplete="off" />
                  <label className="btn btn-outline-dark" style={{ backgroundColor: '#bbc6c9' }} htmlFor="btnradio3">Удалить</label>
                </div>
              </div>

              {/* Модальное окно */}
              <div className="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel2" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="staticBackdropLabel2">Коза</h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Закрыть" />
                    </div>
                    <div className="modal-body">
                      ID: 18<br />
                      Вид животного: Коза<br />
                      Описание: Потерялась коза, последний раз видели в здании Московского вокзала г. Санкт-Петербург. Коза белая, пуховая.<br />
                      Номер чипа: go-011-spb<br />
                      Район: Центральный<br />
                      Дата: 14-03-2022<br />
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100">
            <img src={pes} className="card-img-top" alt="Собака" />
            <div className="card-body">
              <h5 className="card-title">Собака</h5>
              {/* Кнопки в одном контейнере */}
              <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                <div className="btn-group me-2" role="group" aria-label="First group">
                  <input type="radio" className="btn-check" name="btnradio3" data-bs-toggle="modal" data-bs-target="#staticBackdrop3" id="btnradio1" autoComplete="off" defaultChecked />
                  <label className="btn btn-outline-dark" style={{ backgroundColor: '#bbc6c9' }} htmlFor="btnradio1">Подробнее</label>
                </div>
                <div className="btn-group me-2" role="group" aria-label="Second group">
                  <input type="radio" className="btn-check" name="btnradio3" id="btnradio2" autoComplete="off" />
                  <label className="btn btn-outline-dark" style={{ backgroundColor: '#bbc6c9' }} htmlFor="btnradio2">Редактировать</label>
                </div>
                <div className="btn-group" role="group" aria-label="Third group">
                  <input type="radio" className="btn-check" name="btnradio3" id="btnradio3" autoComplete="off" />
                  <label className="btn btn-outline-dark" style={{ backgroundColor: '#bbc6c9' }} htmlFor="btnradio3">Удалить</label>
                </div>
              </div>

              {/* Модальное окно */}
              <div className="modal fade" id="staticBackdrop3" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel3" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="staticBackdropLabel3">Собака</h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Закрыть" />
                    </div>
                    <div className="modal-body">
                      ID: 42<br />
                      Вид животного: Собака<br />
                      Описание: Собака рыжая, была утеряна в Красногвардейском районе.<br />
                      Номер чипа: do-123-spb<br />
                      Район: Красногвардейский<br />
                      Дата: 22-07-2023<br />
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}

export default Lichn2;
