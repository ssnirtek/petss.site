import ButtonReg from "../components/buttonreg";
import Obv from "../components/dobob";
import Footer from "../components/footer";
import Header from "../components/header";
import Cart from "../components/kart";
import Lichn from "../components/lich";
import Lichn2 from "../components/lichn2";
import MyButton from "../components/mybutton";
import React, { useEffect, useState } from "react";





    const Accaunt =  () => {
        let [users, SetUsers]=useState([]);
        useEffect(()=>load(),[])
        function load(){
          fetch("https://pets.сделай.site/api/pets")
              .then((response) => response.json())
              .then((result) => {
                  console.log(result);
                  SetPet(result.data.orders.map((item)=><Lichn data={item}/>))
   
              })
      }
    
    return ( 
        <div>
        <Header/>
       <ButtonReg/>
        {users}
        <Lichn2/>
        <MyButton/>
        <Footer/> 
        </div>
     );
}

export default Accaunt ;