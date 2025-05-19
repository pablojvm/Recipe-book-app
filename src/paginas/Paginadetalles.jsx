import React from "react";
import recetasCard from "../data/recipes.json";
import { createHashRouter, useParams } from "react-router-dom";
import RecetasCard from "../componentes/RecetasCard";

function Paginadetalles() {
  const params = useParams();
  const cartaReceta = recetasCard.find((eachReceta) => {
    if (eachReceta.id === params.idReceta) {
      return true;
    }
  });
  return (
    <div>
      Receta:{cartaReceta.name}
      <p> Calorias: {cartaReceta.calories}</p>
      <p> Porciones : {cartaReceta.servings}</p>
      <p>Opcion saludable{cartaReceta.calories < 400 ? "✅" : "❌"}</p>
      <img src={cartaReceta.image}></img>
    </div>
  );
}

export default Paginadetalles;
