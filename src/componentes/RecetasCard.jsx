import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function RecetasCard(props) {
  return (
    <Link to={`/recetas/${props.receta.id}`}>
      <div id="cada-recetas">
        <img src={props.receta.image ? props.receta.image : "/error404.avif"} alt="recipe photo" />
        <div id="datos-recetas">
          <p>{props.receta.name}</p>
        </div>
      </div>
    </Link>
  );
}

export default RecetasCard;
