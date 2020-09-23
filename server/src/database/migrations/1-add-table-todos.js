module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query(`CREATE TABLE todos(
      id UUID NOT NULL PRIMARY KEY,
      name VARCHAR(20) NOT NULL,
      created_at DATE,
      updated_at DATE 
    )`);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query(`DROP TABLE todos`);
  },
};
