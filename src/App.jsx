import NavBar from "./componentes/NavBar";
import "./App.css";
import Footer from "./componentes/Footer";
import SideBar from "./componentes/SideBar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./paginas/Dashboard";
import Paginadetalles from "./paginas/Paginadetalles";
import About from "./paginas/About";
import NotFound from "./paginas/NotFound";
import recetasArr from "/src/data/recipes.json";
import Formulario from "./paginas/Formulario";
import { useState } from "react";
import EditFormulario from "./paginas/EditFormulario";
import Recetas from "./componentes/Recetas";

function App() {
  const [listaRecetas, setListaRecetas] = useState(recetasArr);

  return (
    <div id="App">
      <NavBar />
      <div id="contenedor">
        <SideBar />

        <Routes>
          <Route
            path="/"
            element={
              <Dashboard
                listaRecetas={listaRecetas}
                setListaRecetas={setListaRecetas}
              />
            }
          />
          <Route
            path="/recetas"
            element={
              <Recetas
                listaRecetas={listaRecetas}
                setListaRecetas={setListaRecetas}
                setIndexEditar={setIndexEditar}
              />
            }
          />
          <Route
            path="/recetas/:idReceta"
            element={
              <Paginadetalles
                listaRecetas={listaRecetas}
                setListaRecetas={setListaRecetas}
              />
            }
          />
          <Route
            path={`/editFormulario/:idEditReceta`}
            element={
              <EditFormulario
                listaRecetas={listaRecetas}
                setListaRecetas={setListaRecetas}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/añadirReceta"
            element={<Formulario setListaRecetas={setListaRecetas} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
