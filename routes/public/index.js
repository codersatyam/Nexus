const express = require("express")
const router = express.Router()

// const auth = require("./auth")
const user = require("./user")
const auth = require('./auth')
const loans = require("./loans")
const product = require("./product")
const leads = require("./leads")

// Verify that each imported route is a valid router middleware
const routes = [
    {path: "/auth", handler: auth},
    { path: "/user", handler: user },
    { path: "/loans", handler: loans},
    { path: "/products", handler: product},
    { path: "/leads", handler: leads},
];

// Add routes with validation
routes.forEach(({ path, handler }) => {
    if (handler && typeof handler.use === 'function') {
        router.use(path, handler);
    } else {
        console.error(`Invalid router handler for path: ${path}`);
    }
});

module.exports = router