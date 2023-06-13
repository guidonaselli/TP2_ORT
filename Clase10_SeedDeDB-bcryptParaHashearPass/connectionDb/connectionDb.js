import { Sequelize } from "sequelize";
import "dotenv/config.js"

//Environment Variables
const database = process.env.DATABASE;
const user = process.env.DB_USERNAME;
const pass = process.env.DB_PASSWORD;
const dialect = process.env.DB_DIALECT;
const port = process.env.DB_PORT;
const host = process.env.DB_HOST;

// Option 3: Passing parameters separately (other dialects)
const connectionDb = new Sequelize(database, user, pass, {
    host: host,
    port: port,
    dialect: dialect
});

// Testing the connection
try {
    await connectionDb.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

export default connectionDb;
