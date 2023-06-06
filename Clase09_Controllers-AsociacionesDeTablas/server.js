import express from "express";
import routes from "./routes/routes.js";
import connectionDb from "./connectionDb/connectionDb.js";
import "dotenv/config.js";
// Database Imports
  // import User from "./Models/User.js";
  // import Category from "./Models/Category.js";
import cors from "cors";


const app = express();
const port = process.env.SERVER_PORT;

//Middleware de aplicacion
app.use(express.json())
app.use(express.urlencoded({extended:true}))
  //Si quiero enviar una imagen tengo que hacerlo a través del URL ENCODED

app.use(cors());

//Middlewares de Rutas
app.use(routes);

// Siempre Abajo de todo
// Funcion de SEQUELIZE para sincronizar el codigo con la db
await connectionDb.sync({ force: false }).then(() => //force: This creates the table, dropping it first if it already existed
  app.listen(port, () => {
    console.log(`Server OK | http://localhost:${port}`);
  })
);
