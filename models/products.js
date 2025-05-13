'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    //   loanProduct.hasOne(models.loanRequests, { foreignKey: "loanProductID" });
    // products.hasOne(models.loanOrganization, { foreignKey: "loanProductID" });
    }
  };
  products.init({
    productCode: {  // Assumption is this is coming from partner's end
      allowNull: false,
      type: DataTypes.STRING,
    },
    productName: {  // Assumption is this is coming from partner's end
      allowNull: false,
      type: DataTypes.STRING
    },
    category: {
        allowNull: false,
        type: DataTypes.STRING
      },
    productType: {
      allowNull: false,
      type: DataTypes.STRING
    },
    organizationID: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    minInterestRatePerAnnum: {
      allowNull: false,
      type: DataTypes.FLOAT
    },
    maxInterestRatePerAnnum: {
      allowNull: false,
      type: DataTypes.FLOAT
    },
    minimumPrincipalAmount: {
      allowNull: false,
      type: DataTypes.FLOAT
    },
    maximumPrincipalAmount: {
      allowNull: false,
      type: DataTypes.FLOAT
    },
    minTenurePeriodInMonths: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    maxTenurePeriodInMonths: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    status: {
        allowNull: false,
        type: DataTypes.STRING
      },
    deactivatedAt: {
      type: DataTypes.DATE
    }
  },{
    sequelize,
    modelName: 'products',
}
);
  return products;
};