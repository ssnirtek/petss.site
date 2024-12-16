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
        let [user, SetUser]=useState([]);
        useEffect(()=>load(),[])
        function load(){
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Authorization", " Bearer "+localStorage.token) ;
            const requestOptions = {
                method: "GET",
                headers: myHeaders,
                redirect: "follow"
              };
          fetch("https://pets.сделай.site/api/users", requestOptions)
              .then((response) => response.json())
              .then((result) => {
                  console.log(result);
                  SetUser( <Lichn key={result.id} data={result} />);
   
              })
      }
    
    return ( 
        <div>
        <Header/>
       <ButtonReg/>
        {user}
        <Lichn2/>
        <MyButton/>
        <Footer/> 
        </div>
     );
}

export default Accaunt ;