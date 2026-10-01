import Footer from "../components/footer";
import Header from "../components/header";

import Pod from "../components/pod";
import Pod2 from "../components/pod2";
import Slider from "../components/slaider";
import { useEffect, useState } from "react";
import Card from "../components/card";

function  Glavn(){
    const [pet, setPet] = useState([]);
 
    useEffect(() => {
        load();
    }, []);
 
    function load  ()  {
        fetch("https://pets.сделай.site/api/pets")
        .then((response) => response.json())
        .then((result) => {
            console.log(result);
            setPet(
                result.data.orders.map((item) => <Card key={item.id} data={item} />)
            );
        });
}
    return ( 
        <div> 
        <Header/> 
        <Slider/>
      
       
        <div className="container">
                <div className="row">
                    {/* Разбиение на два столбца для каждой карточки */}
                    {pet.map((card, index) => (
                        <div className="col-md-6" key={index}>
                            {card}
                        </div>
                    ))}
                </div>
            </div>
        <Pod/>
        <Pod2/> 
        <Footer/> 
        </div>
     );
}

export default Glavn ;