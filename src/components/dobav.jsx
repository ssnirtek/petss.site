function Dobav() {

    return ( 
      
<div> 
<form className="pyk" style={{marginLeft: 100, marginRight: 100}}>
  <form className="row g-3">
    <div className="col-md-4">
      <label htmlFor="validationServer01" className="form-label">Введите ваше имя</label>
      <input type="text" className="form-control is-valid" id="validationServer01" defaultValue="Иван" required />
      <div className="valid-feedback">
        Отлично!
      </div>
    </div>
    <div className="col-md-4">
      <label htmlFor="validationServer02" className="form-label">Введите вашу фамилию</label>
      <input type="text" className="form-control is-valid" id="validationServer02" defaultValue="Иванов" required />
      <div className="valid-feedback">
      Отлично!
      </div>
    </div>
    <div className="col-md-4">
      <label htmlFor="validationServerUsername" className="form-label">Введите имя пользователя</label>
      <input type="text" className="form-control is-valid" id="validationServer02" defaultValue="@ivanov.ivan" required />
      <div className="valid-feedback">
      Отлично!
      </div>
    </div>
    <div className="col-md-6">
      <label htmlFor="validationServer03" className="form-label">Введите город, где потярялся питомец</label>
      <input type="text" className="form-control is-valid" id="validationServer03" aria-describedby="validationServer03Feedback" required />
      <div className="valid-feedback">
        Отлично!
      </div>
    </div>
    <div className="col-md-4">
      <label htmlFor="validationServer03" className="form-label">Введите ваш номер телефона</label>
      <input type="text" className="form-control is-valid" id="validationServer03" aria-describedby="validationServer03Feedback" required />
      
    </div>
    <div className="col-md-3">
      <label htmlFor="validationServer04" className="form-label">Выберите год потери</label>
      <select className="form-select is-valid" id="validationServer04" aria-describedby="validationServer04Feedback" required>
        <option selected disabled value>2024</option>
        <option>2023</option>
        <option>2022</option>
        <option>2021</option>
        <option>2020</option>
      </select>
    </div>
    <div className="col-md-4">
      <label htmlFor="validationServer03" className="form-label">Введите адрес электронной почты</label>
      <input type="text" className="form-control is-valid" id="validationServer03" aria-describedby="validationServer03Feedback" required />
      
    </div>
    <div className="mb-3">
      <label htmlFor="formFileSm" className="form-label">Добавить фото животного</label>
      <input className="form-control form-control-sm" id="formFileSm" type="file" />
    </div>
    <div className="col-md-4">
      <span className="input-group-text">Напишите особые приметы вашего животного</span>
      <textarea className="form-control" aria-label="С текстовым полем" defaultValue={""} />
    </div>
    <div className="col-md-4">
      <label htmlFor="validationServer05" className="form-label">   Придумайте пароль</label>
      <input type="text" className="form-control is-valid" id="validationServer05" aria-describedby="validationServer05Feedback" required />
      <div id="validationServer05Feedback" className="invalid-feedback">
        Обязательное поля ввода
      </div>
    </div>
    <div className="col-12">
      <div className="form-check">
        <input className="form-check-input is-invalid" type="checkbox" defaultValue id="invalidCheck3" aria-describedby="invalidCheck3Feedback" required />
        <label className="form-check-label" htmlFor="invalidCheck3">
          Я согласен на обработку данных
        </label>
       
      </div>
    </div>
    <div className="col-12">
      <button className="btn btn-dark" type="submit">Отправить объявление</button>
    </div>
  </form>
  </form>
</div>



     );
}

export default Dobav;