'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class leads extends Model {
    static associate(models) {
    //   loanProduct.hasOne(models.loanRequests, { foreignKey: "loanProductID" });
    // products.hasOne(models.loanOrganization, { foreignKey: "loanProductID" });
    }
  };
  leads.init({
    id: {  // Assumption is this is coming from partner's end
      allowNull: false,
      type: DataTypes.STRING,
      primaryKey: true,
    },
    phoneNo: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING,
      },
      productId: {
        type: DataTypes.INTEGER,
      },
      organizationId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "organizations",
          key: "id"
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      },
      address: {
        type: DataTypes.TEXT,
      },
      geohash: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      applicationDetails: {
        type: DataTypes.JSON,
        allowNull: false,
      },
      status: {
        allowNull: false,
        type: DataTypes.STRING,
      },
  },{
    sequelize,
    modelName: 'leads',
}
);
  return leads;
};