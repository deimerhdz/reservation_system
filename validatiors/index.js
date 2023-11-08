const authValidators = require('./auth.validator')
const tableValidator = require('./table.validator');
const uploadValidator = require('./upload.validator');
module.exports = {
    ...authValidators,
    ...tableValidator,
    ...uploadValidator
}