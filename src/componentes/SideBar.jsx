import "../componentes/SideBar.css";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div id="SideBar">
      <ul>
        <Link to="/">
          <li>Inicio</li>
        </Link>

        <Link to="/about">
          <li>Acerca De</li>
        </Link>

        <Link to="/añadirReceta">
          <li>Añadir receta</li>
        </Link>
      </ul>
    </div>
  );
}

export default SideBar;
