import { useState } from "react";
import { FaPlus } from "react-icons/fa";

function FormularioLibro({ agregarLibro }) {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [anio, setAnio] = useState("");

  const manejarEnvio = (e) => {
    e.preventDefault();

    if (!titulo.trim() || !autor.trim() || !anio) {
        alert("Completa todos los campos.");
        return;
    }
    agregarLibro({
      titulo,
      autor,
      anio: Number(anio)
    });

    setTitulo("");
    setAutor("");
    setAnio("");
  };

  return (
    <div className="form-card">
      <h2>Agregar libro</h2>

      <form onSubmit={manejarEnvio}>
        <div className="form-grid">

          <div className="input-group">
            <label>Título</label>
            <input
              type="text"
              placeholder="Ej. El principito"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Autor</label>
            <input
              type="text"
              placeholder="Ej. Antoine de Saint-Exupéry"
              value={autor}
              onChange={(e) => setAutor(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Año</label>
            <input
              type="number"
              placeholder="1943"
              value={anio}
              onChange={(e) => setAnio(e.target.value)}
            />
          </div>

        </div>

        <button className="add-button" type="submit">
          <FaPlus />
          Agregar libro
        </button>
      </form>
    </div>
  );
}

export default FormularioLibro;