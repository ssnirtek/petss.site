import Accaunt from "./pages/accaunt";
import DobavPage from "./pages/dobavpage";
import Glavn from "./pages/glavnaya";
import Poisk from "./pages/poisk";
import Reg from "./pages/reg";
import "./components/app1.css";
import {Routes, Route} from "react-router-dom";



const App = () => {
  return (
    <div >
   
    <div >
      <Routes> 
        <Route path="/" element={<Glavn />} />
        <Route path="/Accaunt" element={<Accaunt />} />
        <Route path="/Reg" element={<Reg />} />
        <Route path="/Poisk" element={<Poisk />} />
        <Route path="/DobavPage" element={<DobavPage />} />
      </Routes>
    </div>

     </div>
  );
}

export default App;
