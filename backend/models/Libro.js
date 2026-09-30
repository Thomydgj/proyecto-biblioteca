const mongoose = require("mongoose");

const libroSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true
  },
  autor: {
    type: String,
    required: true
  },
  anio: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("Libro", libroSchema);