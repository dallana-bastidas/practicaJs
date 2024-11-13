exports.consultarPeliculas = (req, res) => {
	let info = {
		nombre: "Iro Man",
		Genero: "Accion",
		estudio: "Marvel",
		lanzamiento: "2008",
	};
	res.send(info); //enviamos la infomacion
};

