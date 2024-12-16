import Footer from "../components/footer";
import Header from "../components/header";
import Cart from "../components/kart";
import Karts2 from "../components/karts";
import Pod from "../components/pod";
import Pod2 from "../components/pod2";
import Slider from "../components/slaider";
import { useEffect, useState } from "react";

function Glavn () {
    let [pet, SetPet]=useState([]);
    useEffect(()=>load(), [])
    function load(){
        fetch("https://pets.сделай.site/api/pets")
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                SetPet(result.data.orders.map((item)=><Karts2 data={item}/>))
 
            })
    }
    return ( 
        <div> 
        <Header/> 
        <Slider/>
        {pet}
        <Pod/>
        <Pod2/> 
        <Footer/> 
        </div>
     );
}

export default Glavn ;