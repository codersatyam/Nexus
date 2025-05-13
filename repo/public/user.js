// const { Op } = require('sequelize');
// const logger = require('../../domain/logs');
// const User = require("../../models/users")



// const checkUserBanned = async (userId) => {
//     try {
//         return  await User.findOne({
//             where: {phoneNo: userId},
//         });
//     } catch (error) {
//         logger.error('Error in getAllProducts repository:', error);
//         throw error;
//     }
// };





module.exports = {
    getAllProducts
};