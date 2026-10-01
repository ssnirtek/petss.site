import dog from '../components/images/dog.jpg'
import mouse from '../components/images/mouse.jpg'
import goril from '../components/images/goril.jpg'


function Cart() {
    return ( 
      <div>
  <h2 className="text-center text-dark m-2" style={{backgroundColor: '#bbc6c9'}}>Найденные животные</h2>
  <div id="carouselExampleIndicators" className="carousel slide m-auto w-75 p-2" data-bs-ride="carousel" style={{minHeight: 400}}>
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
    </div>
    <div className="carousel-inner text-center" style={{backgroundColor: '#bbc6c9'}}>
      <div className="carousel-item active">
        <img src={dog} className="d-block mx-auto text-dark" alt="Собака" style={{width: 900}} />
        <h2>Найдена собака</h2>
        <p>Собака рыжая, была утеряна в красногвардейчком районе</p>
      </div>
      <div className="carousel-item">
        <img src={mouse} className="d-block mx-auto text-dark" alt="Мышь" style={{width: 900}} />
        <h2>Найдена мышь</h2>
        <p>Мышь серая, была утеряна в центральном районе</p>
      </div>
      <div className="carousel-item text-dark">
        <img src={goril} className="d-block mx-auto text-dark" alt="Горилла" style={{width: 900}} />
        <h2>Найдена горила</h2>
        <p>Горилла, была утеряна в красногвардейчком районе</p>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Предыдущий</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Следующий</span>
    </button>
  </div>
</div>

     );
}

export default Cart;