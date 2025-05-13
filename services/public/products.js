const bcrypt = require('bcrypt');
const logger = require("../../domain/logs")
const allErrors = require("../../domain/errors")
const {productRepo} = require("../../repo/public")

const getAllProducts = async (orgId) => {
    try {
        const productDetails = await productRepo.getAllProducts(orgId)
        const response = {
            "status" : "success",
            "data" : productDetails
        }
        return response
    } catch (err) {
        return handleError(err);
    }
};

const getProductByIdService = async (productId, orgId) => {
    try {
        const product = await getProductById(productId, orgId);
        if (!product) {
            return { err: 'Product not found' };
        }
        return { data: product };
    } catch (error) {
        logger.error('Error in getProductById service:', error);
        return { err: 'Failed to fetch product' };
    }
};

// Error handler
const handleError = (err) => {
    logger.error("Service DEBUG: ", err);
    if (err instanceof allErrors.EmployeeManagementErrors) {
        return err.getJSONError();
    }
    return allErrors.unexpectedError.getJSONError();
};

module.exports = {getAllProducts, getProductByIdService};