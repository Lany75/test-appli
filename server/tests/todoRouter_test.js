//import dependencies for testing
process.env.NODE_ENV = "test";
const chai = require("chai");
const chaiHttp = require("chai-http");
const Todo = require("../src/models/todoModel");
let should = chai.should();

// configure chai
chai.use(chaiHttp);

const todoListTest = [
  {
    id: "12b1111d-8ab9-4051-887b-90a275cec851",
    name: "Aller se promener",
    createdAt: "2020-10-02",
    updatedAt: "2020-10-02",
  },
  {
    id: "64b1111d-8ab9-4051-887b-90a275cec851",
    name: "Prendre une douche",
    createdAt: "2020-10-02",
    updatedAt: "2020-10-02",
  },
];

describe("todoRouter", () => {
  beforeEach(async () => {
    delete require.cache[require.resolve("../src/server")];
    server = require("../src/server");

    //suppression des données avant le test
    await Todo.destroy({ where: {} });
    //création de données dans la table todos pour le test
    //await Todo.bulkCreate(todoListTest);
  });

  afterEach(async () => {
    // suppression des données après le test
    await Todo.destroy({ where: {} });
  });

  describe("GET /", () => {
    it("should return tasks of the DB if DB is not empty", async () => {
      //création de données dans la table todos pour le test
      await Todo.bulkCreate(todoListTest);

      return chai
        .request(server)
        .get("/")
        .then((res) => {
          res.should.have.status(200);
          res.body.should.be.a("array").eql(todoListTest);
          const tasks = Array.from(res.body);
          tasks.forEach((task) => {
            task.should.have.property("id");
            task.should.have.property("name");
            task.should.have.property("createdAt");
            task.should.have.property("updatedAt");
          });
        });
    });

    it("should return an empty array if there are no tasks in the DB", async () => {
      return chai
        .request(server)
        .get("/")
        .then((res) => {
          res.should.have.status(200);
          res.body.should.be.a("array").eql([]);
        });
    });
  });

  describe("POST /:nom", () => {
    it("should post task 'dormir' in the DB", () => {
      const date = new Date();
      let actualDate =
        date.getFullYear() +
        "-" +
        (date.getMonth() + 1) +
        "-" +
        (date.getDate().toString().length === 1
          ? "0" + date.getDate()
          : date.getDate());

      return chai
        .request(server)
        .post("/dormir")
        .then((res) => {
          res.should.have.status(201);
          res.body.should.be.a("array");
          const tasks = Array.from(res.body);
          tasks.forEach((task) => {
            task.should.have.property("id");
            task.should.have.property("name").eql("dormir");
            task.should.have.property("createdAt").eql(actualDate);
            task.should.have.property("updatedAt").eql(actualDate);
          });
        });
    });
  });

  describe("DELETE /:id", () => {
    it("should delete task with id provided", async () => {
      //création de données dans la table todos pour le test
      await Todo.bulkCreate(todoListTest);

      return chai
        .request(server)
        .delete("/12b1111d-8ab9-4051-887b-90a275cec851")
        .then((res) => {
          res.should.have.status(200);
          res.body.should.be.a("array").eql([
            {
              id: "64b1111d-8ab9-4051-887b-90a275cec851",
              name: "Prendre une douche",
              createdAt: "2020-10-02",
              updatedAt: "2020-10-02",
            },
          ]);
        });
    });
  });
});
