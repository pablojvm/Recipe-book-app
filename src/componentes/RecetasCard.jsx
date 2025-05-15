function RecetasCard(props) {
  
  return (
    <div id="cada-recetas">
      
      <img src={props.receta.image} alt="recipe photo" />
      <div id="datos-recetas">
        <p>{props.receta.name}</p>
        <p> Calorias: {props.receta.calories}</p>
        <p> Porciones : {props.receta.servings}</p>
        <p>Opcion saludable{props.receta.calories < 400 ? "✅" : "❌"}</p>
        <button onClick={props.onDelete}>Delete</button>
      </div>
    </div>
  );
}

export default RecetasCard;
