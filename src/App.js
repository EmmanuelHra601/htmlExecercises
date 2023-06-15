import "./App.css";
//import SeleccionUsuario from "./Components/SeleccionUsuario";
/*import SignIn from "./Components/SignIn";*/
import { Routes, Route } from "react-router-dom";
import CrearTorneo from "./Components/CrearTorneo";
import CrudRolUsr from "./Components/CrudRolUsr";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CrearTorneo/>}/>
        <Route path="/seleccionDeUsuario" element={<CrudRolUsr/>}/>
        <Route path="/crearTorneo" element={<CrearTorneo/>}/>
      </Routes>
    </div>
  );
}

export default App;
