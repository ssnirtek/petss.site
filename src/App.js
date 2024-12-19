import Accaunt from "./pages/accaunt";
import DobavPage from "./pages/dobavpage";
import Glavn from "./pages/glavnaya";
import Poisk from "./pages/poisk";
import Reg from "./pages/reg";
import "./components/app1.css";
import {Routes, Route} from "react-router-dom";
import DetailsPage from "./pages/details";
import AnimalSearch from "./pages/AnimalSearch";


const App = () => {
  return (
    <div >
   
    <div >
      <Routes> 
        <Route path="/" element={<Glavn />} />
        <Route path="/Accaunt" element={<Accaunt />} />
        <Route path="/Reg" element={<Reg />} />
        <Route path="/AnimalSearch" element={<AnimalSearch />} />
        <Route path="/DobavPage" element={<DobavPage />} />
        <Route path="/details/:id" element={<DetailsPage/>}/>
      </Routes>
    </div>

     </div>
  );
}

export default App;
