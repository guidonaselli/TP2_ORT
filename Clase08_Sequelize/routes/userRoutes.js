import { Router } from "express";
const userRoutes = Router();

userRoutes.get("/", (req, res) => {
	res.send("Get all users")
});

userRoutes.get("/:id", (req, res) => {
	res.send("Get user by id")
});

// userRoutes.post("/", (req, res) => {
// 	const { nombre, apellido, pass, email } = req.body;
// 	const sql = `INSERT INTO PERSONAS (nombre, apellido, pass, email) 
// 								VALUES ('${nombre}', '${apellido}', '${pass}', '${email}')`;
// 	connection.query(sql, (err, result) => {
// 		if (err) throw err;
// 		console.log(result);
// 		res.send("Create user");
		
// 		connection.query(`select * from PERSONAS`).then((data) => {
// 			console.log(data.recordset[data.recordset.length - 1]);
// 		});
// 	});
// });

userRoutes.put("/:id", (req, res) => {
	res.send("Update user by id")
});

userRoutes.delete("/:id", (req, res) => {
	res.send("Delete user by id")
});





//Abajo de todo
export default userRoutes;