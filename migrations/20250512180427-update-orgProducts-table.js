'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      productCode: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      productName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING
      },
      category: {
        allowNull: false,
        type: Sequelize.STRING
      },
      productType: {
        allowNull: false,
        type: Sequelize.STRING
      },
      organizationID: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "organizations",
          key: "id"
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      },
      minInterestRatePerAnnum: {
        allowNull: true,
        type: Sequelize.FLOAT
      },
      maxInterestRatePerAnnum: {
        allowNull: true,
        type: Sequelize.FLOAT
      },
      minimumPrincipalAmount: {
        allowNull: true,
        type: Sequelize.FLOAT
      },
      maximumPrincipalAmount: {
        allowNull: true,
        type: Sequelize.FLOAT
      },
      minTenurePeriodInMonths: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      maxTenurePeriodInMonths: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING
      },
      deactivatedAt: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('products');
  }
};