import { Router } from "express";
const userRoutes = Router();

import UserController from "../Controllers/UserController.js"
const UserControl = new UserController();

userRoutes.get("/", UserControl.getAllUsers);

userRoutes.get("/:id", UserControl.getUserByID);

userRoutes.post("/", UserControl.createUser);


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

userRoutes.put("/:id", UserControl.updateUserByID);

userRoutes.delete("/:id", UserControl.deleteUserByID);





//Abajo de todo
export default userRoutes;