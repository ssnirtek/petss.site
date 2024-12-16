function Pod2() {
    return ( 
       
   <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Новое сообщение</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Закрыть" />
      </div>
      <div className="modal-body">
        <form>
          <div className="mb-3">
            <label htmlFor="recipient-name" className="col-form-label">Логин:</label>
            <input type="text" className="form-control" id="recipient-name" />
          </div>
          <div className="mb-3">
            <label htmlFor="recipient-name" className="col-form-label">Пароль:</label>
            <input type="text" className="form-control" id="recipient-name" />
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-dark" data-bs-dismiss="modal">Войти</button>
        <nav style={{bsBreadcrumbDivider: 'url("data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="8" height="8"%3E%3Cpath d="M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z" fill="%236c757d"/%3E%3C/svg%3E")'}} aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="registration.html">Регистрация</a></li>
            <li className="breadcrumb-item"><a href="profile.html">Забыли логин?</a></li>
            <li className="breadcrumb-item"><a href="profile.html">Забыли пароль?</a></li>
          </ol>
          </nav>
      </div>
    </div>
  </div>
</div>

     );
}

export default Pod2;