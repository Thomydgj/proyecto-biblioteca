const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const librosRoutes = require("./routes/libros");

const app = express();
const PORT = 4000;

// Middlewares
app.use(cors());
app.use(express.json());

// Conexión a MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/libreria")
  .then(() => {
    console.log("MongoDB conectado correctamente");
  })
  .catch((error) => {
    console.error("Error al conectar con MongoDB:", error);
  });

// Ruta principal
app.get("/", (req, res) => {
  res.send("API de biblioteca funcionando");
});

// Rutas de libros
app.use("/api/libros", librosRoutes);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});