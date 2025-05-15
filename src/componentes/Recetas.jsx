import { useState } from "react";
import recetasArr from "/src/data/recipes.json";
import "../componentes/Recetas.css";
import RecetasCard from "./RecetasCard";

function Recetas() {
  const [listaRecetas, setListaRecetas] = useState(recetasArr);
  const handleEliminarReceta = (index) => {
    console.log("probando");

    const cloneState = [...listaRecetas];
    cloneState.splice(index, 1);
    setListaRecetas(cloneState);
  };
  return (
    <div id="Recetas">
      {listaRecetas.map((eachReceta, index) => {
        return (
          <RecetasCard
            key={index}
            receta={eachReceta}
            onDelete={() => handleEliminarReceta(index)}
          />
        );
      })}
    </div>
  );
}

export default Recetas;
