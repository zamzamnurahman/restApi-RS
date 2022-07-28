import { Sequelize } from "sequelize";

const db = new Sequelize("restApi-RS", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
