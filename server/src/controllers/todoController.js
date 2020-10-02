const Todo = require("../models/todoModel");
const { v4: uuidv4 } = require("uuid");

module.exports = {
  recupererLesTaches: async () => {
    try {
      const todos = await Todo.findAll({
        order: [["name", "ASC"]],
        attributes: ["id", "name", "createdAt", "updatedAt"],
      });

      return todos;
    } catch (error) {
      console.log("erreur :", error);
    }
  },

  ajouterUneTache: async (nameTask) => {
    try {
      await Todo.create({
        id: uuidv4(),
        name: nameTask,
      });
    } catch (error) {
      console.log("erreur :", error);
    }
  },

  supprimerUneTache: async (taskId) => {
    try {
      await Todo.destroy({
        where: { id: taskId },
      });
    } catch (error) {
      console.log("erreur :", error);
    }
  },
};
