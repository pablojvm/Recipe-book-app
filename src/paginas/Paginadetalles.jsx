import { useParams, useNavigate, Link } from "react-router-dom";
import "./Paginadetalles.css";

function Paginadetalles({ listaRecetas, setListaRecetas }) {
  const params = useParams();
  const navigate = useNavigate();

  const cartaReceta = listaRecetas.find((eachReceta) => {
    if (eachReceta.id === params.idReceta) {
      return true;
    }
  });

  const handleEliminarReceta = (idReceta) => {
    const cloneState = listaRecetas.filter((receta) => receta.id !== idReceta);
    setListaRecetas(cloneState);
    navigate("/");
  };

  if (!cartaReceta) {
    return <h3>No hay receta</h3>;
  }

  return (
    <div id="container-detalle">
      Receta:{cartaReceta.name}
      <p> Calorias: {cartaReceta.calories}</p>
      <p> Porciones : {cartaReceta.servings}</p>
      <p>Opcion saludable{cartaReceta.calories < 400 ? "✅" : "❌"}</p>
      <img src={cartaReceta.image}></img>
      <div id="btn">
        <button
          id="delete-btn"
          onClick={() => handleEliminarReceta(cartaReceta.id)}
        >
          Delete
        </button>
        <Link to={`/editFormulario/${cartaReceta.id}`}>
          <button>Edit Recipe</button>
        </Link>
      </div>
    </div>
  );
}

export default Paginadetalles;

// const cloneState = [...listaRecetas];
//   cloneState.filter(idReceta);
//   setListaRecetas(cloneState);
//   navigate("/");

//  if (!cartaReceta) {
//       return <p>No se encontró la receta</p>;
//     }
//   });

//else {
//   return <p>No se encontró la receta</p>;
// }
