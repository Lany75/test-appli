const dataType = require("sequelize");
const database = require("../database/config/database");

//définition du model de todo
const Todo = database.define("todo", {
  id: {
    allowNull: false,
    primaryKey: true,
    type: dataType.UUID,
  },
  name: {
    allowNull: false,
    type: dataType.STRING(20),
  },
  createdAt: {
    field: "created_at",
    allowNull: false,
    type: dataType.DATE,
  },
  updatedAt: {
    field: "updated_at",
    allowNull: false,
    type: dataType.DATE,
  },
});

module.exports = Todo;
