'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('leads', {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
      },
      phoneNo: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      category: {
        type: Sequelize.STRING,
      },
      prodcutId: {
        type: Sequelize.INTEGER,
      },
      organizationId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "organizations",
          key: "id"
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      },
      address: {
        type: Sequelize.TEXT,
      },
      geohash: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      applicationDetails: {
        type: Sequelize.JSON,
        allowNull: false,
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('leads');
  }
};