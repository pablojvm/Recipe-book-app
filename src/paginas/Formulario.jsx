import React from "react";
import { useState } from "react";

function Formulario({ setListaRecetas }) {
  const [receta, setReceta] = useState("");
  const [calorias, setCalorias] = useState(0);
  const [porciones, setPorciones] = useState(0);
  const [descripcion, setDescripcion] = useState("");
  const [imagen, setImagen] = useState("");

  const handleReceta = (event) => {
    setReceta(event.target.value);
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

  const handleAddRecetas = (event) => {
    event.preventDefault();

    const newReceta = {
      receta: receta,
      calorias: calorias,
      porciones: porciones,
      descripcion: descripcion,
      imagen: imagen,
    };

    setListaRecetas((valorActual) => {
      let nuevoEstado = [...valorActual, newReceta];
      return nuevoEstado;
    });
  };

  return (
    <div>
      <h1>Añadir Receta</h1>

      <form onSubmit={handleAddRecetas}>
        <label htmlFor="receta">Receta:</label>
        <input
          type="text"
          name="receta"
          id="receta"
          onChange={handleReceta}
          value={receta}
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
