// import { Router } from "express";
import express from "express";
const router = express.Router();
// Express nos cede este 'enrutador'

// CRUD
router.get("/", (req, res) => {
  res.send("getAllUsers");
});

router.get("/:id", (req, res) => {
  res.send("getUsersByID");
});

router.post("/", (req, res) => {
  res.send("createUser");
});

router.put("/:id", (req, res) => {
  res.send("updateUserByID");
});

router.delete("/:id", (req, res) => {
  res.send("deleteUserByID");
});

export default router;
