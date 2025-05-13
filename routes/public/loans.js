const express = require("express");
const router = express.Router();
const generalConfigs = require('../../config/general-config')
const logger = require('../../domain/logs')
const { authServicesInstance, leadService } = require('../../services/public');
const allErrors = require("../../domain/errors");
const verifyOrg = require("../../validator/orgValidator")

router.get('/draftLoan', async (req, res) => {
    try {
        if (!req.body) {
            res.status(400).send("Invalid request body");
        }
        const response = await authServicesInstance.login(req.body);
        if (!response.err) {
            res.status(200).send(response);
        } else {
            res.status(400).send(response.err);
        }
    } catch (err) {
        handleError(err, res);
    }
});

router.post('/draftLoan/init', async (req, res) => {
    try {
        if (!req.body) {
            res.status(400).send("Invalid request body");
        }
        const response = await authServicesInstance.login(req.body);
        if (!response.err) {
            res.status(200).send(response);
        } else {
            res.status(400).send(response.err);
        }
    } catch (err) {
        handleError(err, res);
    }
});

router.post('/allLoans', async (req, res) => {
    try {
        if (!req.body) {
            res.status(400).send("Invalid request body");
        }
        const response = await authServicesInstance.login(req.body);
        if (!response.err) {
            res.status(200).send(response);
        } else {
            res.status(400).send(response.err);
        }
    } catch (err) {
        handleError(err, res);
    }
});

router.post('/applyLoan', async (req, res) => {
    try {
        if (!req.body) {
            res.status(400).send("Invalid request body");
        }
        const response = await authServicesInstance.login(req.body);
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


