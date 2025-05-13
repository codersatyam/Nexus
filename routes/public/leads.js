const express = require("express");
const router = express.Router();
const generalConfigs = require('../../config/general-config')
const logger = require('../../domain/logs')
const { authServicesInstance, leadService } = require('../../services/public');
const allErrors = require("../../domain/errors");
const verifyOrg = require("../../validator/orgValidator")

router.post('/applyLead', verifyOrg, async (req, res) => {
    try {
        const orgId = req.orgId; // Get orgId from middleware
        if (!orgId) {
            throw allErrors.missingField('orgId');
        }
        if (!req.body) {
            res.status(400).send("Invalid request body");
        }
        const leadData = {
            ...req.body,
            organizationId: req.orgId 
        };
        const response = await leadService.applyLead(leadData);
        if (!response.err) {
            res.status(200).send(response);
        } else {
            res.status(400).send(response.err);
        }
    } catch (err) {
        handleError(err, res);
    }
});


const handleError = (err, res) => {
    res.status(400);
    if (err instanceof allErrors.EmployeeManagementErrors) {
        res.send(err.getJSONError());
    } else {
        logger.error(err);
        res.send(allErrors.unexpectedError);
    }
};

module.exports = router;


