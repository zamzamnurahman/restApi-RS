module.exports = (sequelize, DataTypes) => {
  const Pasien = sequelize.define(
    "pasien",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: DataTypes.STRING,
      gender: DataTypes.ENUM("laki-laki", "perempuan"),
      no_telp: DataTypes.STRING,
      birthday: DataTypes.STRING,
      alamat: DataTypes.STRING,
      keluhan: DataTypes.STRING,
      jenis_pemeriksaan: DataTypes.ENUM("1", "2", "3"),
      jenis_pengobatan: DataTypes.ENUM("1", "2", "3"),
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
      tableName: "pasien",
    }
  );
  return Pasien;
};
