import cat from '../components/images/cat.jpg'

function Kart1() {
    return ( 
 <div className="d-flex flex-row flex-wrap">
  <div className="d-flex flex-row flex-wrap border m-3 p-3" style={{minWidth: 300, width: '45%'}}>
    <img src={cat} className="w-75" alt="рисунок животного" />
    <p className="w-50 text-dark" style={{minWidth: 250}}>id:</p>
    <p className="w-50" style={{minWidth: 250}}>14</p>
    <p className="w-50 text-dark" style={{minWidth: 250}}>Вид животного:</p>
    <p className="w-50" style={{minWidth: 250}}> Кошка</p>
    <p className="w-50 text-dark" style={{minWidth: 300}}>Описание:</p>
    <p className="w-50" style={{minWidth: 300}}>Потерялась кошка, пушистая, серая. Любит играть, ласковая.</p>
    <p className="w-50 text-dark" style={{minWidth: 300}}>Номер чипа:</p>
    <p className="w-50" style={{minWidth: 300}}>ca-001-spb</p>
    <p className="w-50 text-dark" style={{minWidth: 300}}>Район:</p>
    <p className="w-50" style={{minWidth: 300}}>Василиостровский</p>
    <p className="w-50 text-dark" style={{minWidth: 300}}>Дата:</p>
    <p className="w-50 text-dark" style={{minWidth: 300}}>24-03-2020</p>
  </div>
</div>

     );
}

export default Kart1;