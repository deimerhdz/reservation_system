const authController = require('./auth.controller');
const restaurantController = require('./restaurant.controller');
const tableController = require('./tables.controller');

module.exports = {
    ...authController,
    ...restaurantController,
    ...tableController
}