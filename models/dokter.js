module.exports = (sequelize, DataTypes) => {
  const Dokter = sequelize.define(
    "dokter",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: DataTypes.STRING,
      alamat: DataTypes.STRING,
      gender: DataTypes.ENUM("laki-laki", "perempuan"),
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      tableName: "dokter",
    }
  );
  return Dokter;
};
