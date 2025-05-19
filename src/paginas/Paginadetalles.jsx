import React from "react";
import recetasCard from "../data/recipes.json";
import { useParams } from "react-router-dom";
import RecetasCard from "../componentes/RecetasCard";

function Paginadetalles({ listaRecetas, setListaRecetas }) {
  const params = useParams();
  const cartaReceta = recetasCard.find((eachReceta) => {
    if (eachReceta.id === params.idReceta) {
      return true;
    }

    const handleEliminarReceta = (index) => {
      const cloneState = [...listaRecetas];
      cloneState.splice(index, 1);
      setListaRecetas(cloneState);
    };
  });
  return (
    <div>
      Receta:{cartaReceta.name}
      <p> Calorias: {cartaReceta.calories}</p>
      <p> Porciones : {cartaReceta.servings}</p>
      <p>Opcion saludable{cartaReceta.calories < 400 ? "✅" : "❌"}</p>
      <img src={cartaReceta.image}></img>
      <button onClick={() => handleEliminarReceta(index)}>Delete</button>
    </div>
  );
}

export default Paginadetalles;
/* 
function Recetas({ listaRecetas, setListaRecetas }) {
  // const [listaRecetas, setListaRecetas] = useState(recetasArr);
  const handleEliminarReceta = (index) => {
    const cloneState = [...listaRecetas];
    cloneState.splice(index, 1);
    setListaRecetas(cloneState);
  }; */
