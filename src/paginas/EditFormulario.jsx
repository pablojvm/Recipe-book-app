import { useNavigate } from "react-router-dom";
import { useState } from "react";

function EditFormulario({ listaRecetas, setListaRecetas, index }) {
  console.log(index);
  const [name, setName] = useState(listaRecetas[index].name);
  const [calorias, setCalorias] = useState("");
  const [porciones, setPorciones] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [imagen, setImagen] = useState("");

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleCalorias = (event) => {
    setCalorias(event.target.value);
  };

  const handlePorciones = (event) => {
    setPorciones(event.target.value);
  };

  const handleDescripcion = (event) => {
    setDescripcion(event.target.value);
  };

  const handleImagen = (event) => {
    setImagen(event.target.value);
  };

  const navigate = useNavigate();

  const handleEditRecetas = (event) => {
    event.preventDefault();

    const recetaEditada = {
      ...listaRecetas[index],
      name,
      calorias,
      porciones,
      descripcion,
      imagen,
    };

    const nuevasRecetas = [...listaRecetas];
    nuevasRecetas[index] = recetaEditada;

    setListaRecetas(nuevasRecetas);

    navigate("/");
  };

  return (
    <div>
      <h1>Editar Receta</h1>

      <form onSubmit={handleEditRecetas}>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={handleName}
          value={name}
        />

        <label htmlFor="calorias">Calorias:</label>
        <input
          type="number"
          name="calorias"
          id="number"
          onChange={handleCalorias}
          value={calorias}
        />

        <label htmlFor="porciones">Porciones:</label>
        <input
          type="number"
          name="porciones"
          id="porciones"
          onChange={handlePorciones}
          value={porciones}
        />

        <label htmlFor="descripcion">Descripcion:</label>
        <input
          type="text"
          name="descripcion"
          id="descripcion"
          onChange={handleDescripcion}
          value={descripcion}
        />

        <label htmlFor="imagen">Imagen:</label>
        <input
          type="url"
          name="imagen"
          id="imagen"
          onChange={handleImagen}
          value={imagen}
        />

        <button>Editar!</button>
      </form>
    </div>
  );
}

export default EditFormulario;
