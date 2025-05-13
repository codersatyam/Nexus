const {register, login} = require("./auth")
const {getAllProducts, getProductByIdService} = require("./products")
const {applyLead} = require("./leads")

module.exports = {
    productServiceInstances: {
        getAllProducts: getAllProducts,
        getProductById: getProductByIdService,
    },
    authService : {
        register: register,
        login : login
    },
    leadService : {
        applyLead : applyLead
    }

};
