import sequelize from "sequelize";
import db from "../config/database.js";

const { DataTypes } = sequelize;

const user = db.define(
  "users",
  {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default user;

(async () => {
  await db.sync();
})();
