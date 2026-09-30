import { FaBook, FaTrash } from "react-icons/fa";

function ListaLibros({ libros, eliminarLibro }) {
  return (
    <section>
      <div className="books-header">
        <h2>Libros registrados</h2>

        <span className="book-count">
          {libros.length} {libros.length === 1 ? "libro" : "libros"}
        </span>
      </div>

      {libros.length === 0 ? (
        <div className="empty">
          <FaBook size={35} />
          <p>No hay libros registrados.</p>
        </div>
      ) : (
        <div className="books-grid">
          {libros.map((libro) => (
            <div className="book-card" key={libro._id}>

              <div className="book-title">
                📖 {libro.titulo}
              </div>

              <p className="book-info">
                <strong>Autor:</strong> {libro.autor}
              </p>

              <p className="book-info">
                <strong>Año:</strong> {libro.anio}
              </p>

              <button
                className="delete-button"
                onClick={() => {
                    const confirmar = window.confirm(
                        `¿Deseas eliminar "${libro.titulo}"?`
                    );

                    if (confirmar) {
                        eliminarLibro(libro._id);
                    }
                }}
              >
                <FaTrash />
                Eliminar
              </button>

            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default ListaLibros;