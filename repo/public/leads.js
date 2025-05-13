const { Op } = require('sequelize');
const logger = require('../../domain/logs');
const db = require('../../models');

const createLead = async (leadData, leadId, t) => {
    try {
        console.log("leadData, leadId",leadData, leadId)
        const lead = await db.leads.create({
            id:leadId,
            phoneNo: leadData.phoneNo,
            category: leadData.productType,
            productId: leadData.productId,
            organizationId: leadData.organizationId,
            applicationDetails: leadData.applicationDetails,
            status: 'APPLIED',
        },{transaction:t}
    );

        return lead;
    } catch (error) {
        logger.error('Error in applLead repository:', error);
        throw error;
    }
};


module.exports = {
    createLead
};