const express = require("express");

const todoController = require("../controllers/todoController");

const todoRouter = express.Router();

todoRouter.get("/", async (request, response) => {
  const taskList = await todoController.recupererLesTaches();
  response.status(200).json(taskList);
});

todoRouter.post("/:nom", async (request, response) => {
  const { nom } = request.params;
  try {
    await todoController.ajouterUneTache(nom);
    const taskList = await todoController.recupererLesTaches();
    response.status(201).json(taskList);
  } catch (error) {
    console.log("erreur :", error);
    response.status(404).json("Données non trouvées");
  }
});

todoRouter.delete("/:id", async (request, response) => {
  const { id } = request.params;
  try {
    await todoController.supprimerUneTache(id);
    const taskList = await todoController.recupererLesTaches();
    response.status(200).json(taskList);
  } catch (error) {
    console.log("erreur :", error);
    response.status(404).json("Données non trouvées");
  }
});

module.exports = todoRouter;
