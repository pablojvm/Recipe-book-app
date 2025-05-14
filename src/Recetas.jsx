import { useState } from "react";
import recetasArr from "../src/data/recipes.json";
import "./Recetas.css";
/* import RecetasCard from "./RecetasCard"; */

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
        /*         <RecetasCard
          key={index}
          eachRecetareceta={eachReceta}
          onDelete={() => handleEliminarReceta(index)}
        />; */
        return (
          <div key={index} id="cada-recetas">
            <img src={eachReceta.image} alt="recipe photo" />
            <div id="datos-recetas">
              <p>Receta: {eachReceta.name}</p>
              <p> Calorias: {eachReceta.calories}</p>
              <p> Porciones : {eachReceta.servings}</p>
              <p>Opcion saludable{eachReceta.calories < 400 ? "✅" : "❌"}</p>
              <button onClick={handleEliminarReceta}>Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Recetas;
