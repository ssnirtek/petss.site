import React, { useEffect, useState } from "react";

import Inf from "../components/inf";
import Card3 from "../components/card3";




const Lk =  () => {
    let [user, setUser]=useState([]);
    useEffect(()=>load(),[])
    function load(){
      const myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${localStorage.token}`);
  
  
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };
  
  fetch("https://pets.сделай.site/api/users", requestOptions)
    .then((response) => response.json())
    .then((result) => {console.log(result);
     setUser(result);
    });
    }


    return (
        
        <main>
            <Inf data={user}/>
            <Card3/>
        </main>
        
     );
}

export default Lk;