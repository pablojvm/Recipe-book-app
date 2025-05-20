import { useParams, useNavigate } from "react-router-dom";

function Paginadetalles({ listaRecetas, setListaRecetas }) {
  const params = useParams();
  const navigate = useNavigate();

  const cartaReceta = listaRecetas.find((eachReceta) => {
    if (eachReceta.id === params.idReceta) {
      return true;
    } //else {
    //   return <p>No se encontró la receta</p>;
    // }
  });

  const handleEliminarReceta = (idReceta) => {
    const cloneState = listaRecetas.filter((receta) => receta.id !== idReceta);
    setListaRecetas(cloneState);
    navigate("/");
  };

  const handleEditRecipe = () => {};
  return (
    <div>
      Receta:{cartaReceta.name}
      <p> Calorias: {cartaReceta.calories}</p>
      <p> Porciones : {cartaReceta.servings}</p>
      <p>Opcion saludable{cartaReceta.calories < 400 ? "✅" : "❌"}</p>
      <img src={cartaReceta.image}></img>
      <button onClick={() => handleEliminarReceta(cartaReceta.id)}>
        Delete
      </button>
      <button onClick={handleEditRecipe}>Edit Recipe</button>
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
