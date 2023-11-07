const authValidators = require('./auth.validator')
const tableValidator = require('./table.validator');
module.exports = {
    ...authValidators,
    ...tableValidator
}