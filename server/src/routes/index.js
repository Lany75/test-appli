const express = require("express");
const todoController = require("../controllers/todoController");
//const todoRouter = require("./todoRouter");

const router = express.Router();

//router.use("/", todoRouter);

router.get("/", async (request, response) => {
  const taskList = await todoController.recupererLesTaches();
  response.status(200).json(taskList);
});

router.post("/ajouter", async (request, response) => {
  const { newTask } = request.query;
  await todoController.ajouterUneTache(newTask);
  const taskList = await todoController.recupererLesTaches();
  response.status(200).json(taskList);
});

router.use("*", (req, res) => {
  res.status(404).json("C'est pas par là");
});

module.exports = router;
