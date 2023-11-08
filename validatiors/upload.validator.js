const { check } = require("express-validator");
const { validateFile } = require("../middlewares/validateFile");
const { allowedCollection } = require("../utils/handleCollection");
const { validateFields } = require("../middlewares/validateField");


const validatorUpdateUpload=[
    validateFile,
    check('id','It is not valid id').not().isEmpty(),
    check('collection').custom(c=>allowedCollection(c,['restaurant'])),
    validateFields
];

module.exports = {
    validatorUpdateUpload
}