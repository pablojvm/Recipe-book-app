import { useParams, Link } from "react-router-dom";

function RecetasCard(props) {
  return (
    <Link to={`/recetas/${props.receta.id}`}>
      <div id="cada-recetas">
        <img src={props.receta.image} alt="recipe photo" />
        <div id="datos-recetas">
          <p>{props.receta.name}</p>
        </div>
      </div>
    </Link>
  );
}

export default RecetasCard;
