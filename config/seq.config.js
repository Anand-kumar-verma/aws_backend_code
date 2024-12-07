const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(
  "zupeetercm_zptrrrrlhdjnew",// db name
  "root",// username
  "Sudheer@123", // password
  {
    dialect: "mysql",
    host: "51.21.22.154",
    logging: false,
  }
);
module.exports = sequelize;
