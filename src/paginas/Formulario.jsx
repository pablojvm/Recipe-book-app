import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Formulario({ setListaRecetas }) {
  const [name, setName] = useState("");
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

  const handleAddRecetas = (event) => {
    event.preventDefault();

    const newReceta = {
      name: name,
      calorias: calorias,
      porciones: porciones,
      descripcion: descripcion,
      imagen: imagen,
      id: String(Math.floor(Math.random() * 10000000))
    };

    setListaRecetas((valorActual) => {
      let nuevoEstado = [...valorActual, newReceta];
      return nuevoEstado;
    });
    navigate("/");
  };

  return (
    <div>
      <h1>Añadir Receta</h1>

      <form onSubmit={handleAddRecetas}>
        <label htmlFor="name">Receta:</label>
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

        <label htmlFor="descripcion">Imagen:</label>
        <input
          type="url"
          name="imagen"
          id="imagen"
          onChange={handleImagen}
          value={imagen}
        />

        <button>Añadir!</button>
      </form>
    </div>
  );
}

export default Formulario;
