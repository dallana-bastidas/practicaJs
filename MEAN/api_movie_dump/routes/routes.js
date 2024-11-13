const express = require("express");
const router = express.Router();
const peliculaController = require("../controllers/peliculas.controller");
// const generoController = require("../controllers/genero.cotoller");

router.get(`/consultar-peliculas`, peliculaController.consultarPeliculas);
// router.get("/consultar-una-pelicula", peliculaController.consultarUna);
// router.put("/actualizar-pelicula",peliculaController.);
// router.delete("/borrar-pelicula");
// router.post("/crear-pelicula");

// router.get("/generos");
// router.get("/genero");

module.exports = router;
