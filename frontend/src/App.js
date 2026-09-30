import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import FormularioLibro from "./components/FormularioLibro";
import ListaLibros from "./components/ListaLibros";

import "./App.css";

function App() {
  const [libros, setLibros] = useState([]);

  const API_URL = "http://localhost:4000/api/libros";

  // Obtener libros
  const obtenerLibros = async () => {
    try {
      const respuesta = await axios.get(API_URL);
      setLibros(respuesta.data);
    } catch (error) {
      console.error("Error al obtener los libros:", error);
      toast.error("No se pudieron cargar los libros");
    }
  };

  // Agregar libro
  const agregarLibro = async (libro) => {
    try {
      const respuesta = await axios.post(API_URL, libro);

      setLibros((librosActuales) => [
        ...librosActuales,
        respuesta.data
      ]);

      toast.success("Libro agregado correctamente");
    } catch (error) {
      console.error("Error al agregar el libro:", error);
      toast.error("No se pudo agregar el libro");
    }
  };

  // Eliminar libro
  const eliminarLibro = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);

      setLibros((librosActuales) =>
        librosActuales.filter((libro) => libro._id !== id)
      );

      toast.success("Libro eliminado correctamente");
    } catch (error) {
      console.error("Error al eliminar el libro:", error);
      toast.error("No se pudo eliminar el libro");
    }
  };

  // Cargar libros al iniciar
  useEffect(() => {
    obtenerLibros();
  }, []);

  return (
    <main className="app">
      <div className="container">

        <header className="header">
          <div className="header-icon">📚</div>

          <h1>Biblioteca</h1>

          <p>
            Sistema de gestión de libros
          </p>
        </header>

        <FormularioLibro
          agregarLibro={agregarLibro}
        />

        <ListaLibros
          libros={libros}
          eliminarLibro={eliminarLibro}
        />

      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
      />
    </main>
  );
}

export default App;