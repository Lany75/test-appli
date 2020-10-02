const { Sequelize } = require("sequelize");
require("dotenv").config();

let database;
if (process.env.NODE_ENV === "test") {
  console.log("on utilise DATABASE_URL_TEST");
  database = new Sequelize(process.env.DATABASE_URL_TEST);
} else {
  console.log("on utilise DATABASE_URL");
  database = new Sequelize(process.env.DATABASE_URL);
}

async function testDB() {
  try {
    await database.authenticate();
    console.log("YES, on est connecté à la DB !!");
  } catch (error) {
    console.log("DAMNED, on n'est pas connecté à la DB");
  }
}

testDB();

module.exports = database;
