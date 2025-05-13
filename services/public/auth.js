const bcrypt = require('bcrypt');
const logger = require("../../domain/logs")
const allErrors = require("../../domain/errors")
const authHelper = require("../../helper/auth")
const {authRepoInstance} = require("../../repo/public")

const register = async (loginData) => {
    try {
        let userDetails = await this.authRepoInstance.checkUserBanned(phoneNo);
        if (userDetails['isBanned']) throw this.allErrors.accountBanned;
        if (userDetails['isDeleted']) throw this.allErrors.accountDeleted;
        let deviceBindingDetails = await this.authRepoInstance.checkDeviceBinding(phoneNo, deviceID);
        if (deviceBindingDetails?.length === 3 && !deviceBindingDetails.includes(phoneNo)) {
            return {
                status: "success",
                message: "MaxUsersLimitReached",
                data: deviceBindingDetails
            };
        }

        const accessToken = await authHelper.generateOTP(user);

        return {
            status: "Success",
            data: {
                otp:""
                }
            }
    } catch (err) {
        return handleError(err);
    }
};

const login = async (loginData) => {
    try {

    } catch (err) {
        return handleError(err);
    }
}

const handleError = (err) => {
    logger.error("Service DEBUG: ", err);
    if (err instanceof allErrors.EmployeeManagementErrors) {
        return err.getJSONError();
    }
    return allErrors.unexpectedError.getJSONError();
};

module.exports = {register, login}