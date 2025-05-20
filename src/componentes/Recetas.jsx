import RecetasCard from "./RecetasCard";
import './Recetas.css'

function Recetas({ listaRecetas, setListaRecetas }) {
  const handleEliminarReceta = (index) => {
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
            index={index}
          />
        );
      })}
    </div>
  );
}
export default Recetas;
