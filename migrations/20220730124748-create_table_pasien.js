"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("pasien", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: Sequelize.STRING,
      gender: Sequelize.ENUM("laki-laki", "perempuan"),
      no_telp: Sequelize.STRING,
      birthday: Sequelize.STRING,
      alamat: Sequelize.STRING,
      keluhan: Sequelize.STRING,
      jenis_pemeriksaan: Sequelize.ENUM("1", "2", "3"),
      jenis_pengobatan: Sequelize.ENUM("1", "2", "3"),
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("pasien");
  },
};
