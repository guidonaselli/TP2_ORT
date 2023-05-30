import express from 'express'
import router from './routes/router.js'
import connection from './dbConnection/connection.js'


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);



app.listen(8080, () => {
	console.log("http://localhost:8080");
}).on('error', (error) => {
	console.log(error.message);
});