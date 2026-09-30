const express = require("express");
const router = express.Router();

const Libro = require("../models/Libro");

// GET - Obtener todos los libros
router.get("/", async (req, res) => {
  try {
    const libros = await Libro.find();
    res.json(libros);
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al obtener los libros",
      error: error.message
    });
  }
});

// POST - Agregar un libro
router.post("/", async (req, res) => {
  try {
    const { titulo, autor, anio } = req.body;

    if (!titulo || !autor || !anio) {
      return res.status(400).json({
        mensaje: "Todos los campos son obligatorios"
      });
    }

    const nuevoLibro = new Libro({
      titulo,
      autor,
      anio
    });

    const libroGuardado = await nuevoLibro.save();

    res.status(201).json(libroGuardado);
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al agregar el libro",
      error: error.message
    });
  }
});

// DELETE - Eliminar un libro
router.delete("/:id", async (req, res) => {
  try {
    const libroEliminado = await Libro.findByIdAndDelete(req.params.id);

    if (!libroEliminado) {
      return res.status(404).json({
        mensaje: "Libro no encontrado"
      });
    }

    res.json({
      mensaje: "Libro eliminado correctamente",
      libro: libroEliminado
    });
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al eliminar el libro",
      error: error.message
    });
  }
});

module.exports = router;