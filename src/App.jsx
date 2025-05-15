import NavBar from "./componentes/NavBar";
import "./App.css";
import Footer from "./componentes/Footer";
import SideBar from "./componentes/SideBar";
import Recetas from "./componentes/Recetas";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./paginas/Dashboard";

function App() {
  return (
    <div id="App">
      <NavBar />
      <SideBar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
