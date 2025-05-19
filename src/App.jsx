import NavBar from "./componentes/NavBar";
import "./App.css";
import Footer from "./componentes/Footer";
import SideBar from "./componentes/SideBar";
import Recetas from "./componentes/Recetas";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./paginas/Dashboard";
import Paginadetalles from "./paginas/Paginadetalles";
import About from "./paginas/About";
import NotFound from "./paginas/NotFound";

function App() {
  return (
    <div id="App">
      <NavBar />
      <div id="contenedor">
      <SideBar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/recetas" element={<Recetas />} />
        <Route path="/recetas/:idReceta" element={<Paginadetalles />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
