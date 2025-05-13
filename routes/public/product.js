const express = require("express");
const router = express.Router();
const generalConfigs = require('../../config/general-config')
const logger = require('../../domain/logs')
const { authServicesInstance, productServiceInstances } = require('../../services/public');
const allErrors = require("../../domain/errors");
const verifyOrg = require("../../validator/orgValidator")

router.get('/', verifyOrg, async (req, res) => {
    try {
        const orgId = req.orgId; // Get orgId from middleware
        if (!orgId) {
            throw allErrors.missingField('orgId');
        }

        const response = await productServiceInstances.getAllProducts(orgId);
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


