const Todo = require("../models/todoModel");
const { v4: uuidv4 } = require("uuid");

module.exports = {
  recupererLesTaches: async () => {
    const todos = await Todo.findAll({
      order: [["name", "ASC"]],
      attributes: ["id", "name", "createdAt", "updatedAt"],
    });
    return todos;
  },

  ajouterUneTache: async (nameTask) => {
    await Todo.create({
      id: uuidv4(),
      name: nameTask,
    });
  },

  supprimerUneTache: async (taskId) => {
    await Todo.destroy({
      where: { id: taskId },
    });
  },
};
