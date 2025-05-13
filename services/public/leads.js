const bcrypt = require('bcrypt');
const logger = require("../../domain/logs")
const allErrors = require("../../domain/errors")
const {leadRepo, productRepo} = require("../../repo/public")
const {validateLead} = require("../../validator/validation")
const { withTransaction } = require('../../utils/transactionWrapper');
const {generateLeadId} = require("../../utils/common")

const applyLead = async (leadData) => {
    try {
        validateLead(leadData);
        const leadId = generateLeadId(leadData.phoneNo, leadData.productType);
        return await withTransaction(async (t) => {
            const productInfo = await productRepo.getProductInfoById(leadData?.productId, leadData?.organizationId);
            if (!productInfo) {
                throw allErrors.invalidProduct;
            }
            const result = await leadRepo.createLead(leadData, leadId, t);

            return {
                status: 'success',
                data: {
                    leadId: result?.id,
                    phoneNo: result?.phoneNo,
                    category: result?.category,
                    applicationDetails: result?.applicationDetails,
                    status: result?.status
                }
            };
        });
    } catch (err) {
        return err;
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

module.exports = {applyLead};