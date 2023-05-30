import { Router } from 'express'

const postRoutes = Router();

postRoutes.get("/", (req, res) => {
	res.send("Get all posts");
});

postRoutes.get("/:id", (req, res) => {
	res.send("Get post by id");
});

postRoutes.post("/", (req, res) => {
	res.send("Create post");
});

postRoutes.put("/:id", (req, res) => {
	res.send("Update post by id");
});

postRoutes.delete("/post:id", (req, res) => {
	res.send("Delete post by id");
});

export default postRoutes;