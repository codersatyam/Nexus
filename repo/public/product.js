const { Op } = require('sequelize');
const logger = require('../../domain/logs');
const db = require('../../models');



const getAllProducts = async (orgId) => {
    try {
        const products = await db.products.findAll({
            where: {organizationID:orgId , status: 'ACTIVE'},
        });
        return products;
    } catch (error) {
        logger.error('Error in getAllProducts repository:', error);
        throw error;
    }
};

const getProductInfoById = async (productId, organizationID) => {
    try {
        const products = await db.products.findOne({
            where: {organizationID , id:productId, status: 'ACTIVE'},
        });
        return products;
    } catch (error) {
        logger.error('Error in getAllProducts repository:', error);
        throw error;
    }
}

module.exports = {
    getAllProducts,
    getProductInfoById
};