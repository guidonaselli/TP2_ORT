import express from "express";
import routes from "./routes/routes.js";
import connectionDb from "./connectionDb/connectionDb.js";
import "dotenv/config.js";
// Database Imports
import User from "./Models/User.js";
import Category from "./Models/Category.js";
const app = express();
const port = process.env.SERVER_PORT;

//Middlewares de Rutas
app.use(routes);

// Siempre Abajo de todo
// Funcion de SEQUELIZE para sincronizar el codigo con la db
await connectionDb.sync({ force: false }).then(() => //force: This creates the table, dropping it first if it already existed
  app.listen(port, () => {
    console.log(`Server OK | http://localhost:${port}`);
  })
);
