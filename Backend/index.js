const express = require("express");
const cors = require("cors");
const { mongoose } = require("./database");

var app = express();

//Middlewares
app.use(express.json());
app.use(cors({ origin: "http://localhost:4200" }));

//Cargamos el archivo de rutas
app.use("/api/usuario", require("./routes/usuario.route"));

//Se define el puerto
app.set("port", process.env.PORT || 3000);

//Iniciando el servidor
app.listen(app.get("port"), () => {
  console.log(`Server started on port`, app.get("port"));
});