const { check } = require("express-validator");
const { validateFields } = require("../middlewares/validateField");
const { existEmail } = require("../utils/handleValidatorDb");
const { modifyEmailAndPassword } = require("../middlewares/modifyEmailAndPassword");


const singUpValidator =[
    check('name','name is required').not().isEmpty(),
    check('lastname','lastname is required').not().isEmpty(),
    check('email','email is required').not().isEmpty(),
    check('password','password is required').not().isEmpty(),
    check('roleId','roleId is required').not().isEmpty(),
    check('email').custom(existEmail),
    modifyEmailAndPassword,
    validateFields
]

const singInValidator = [
    check('email','email is required').not().isEmpty(),
    check('password','password is required').not().isEmpty(),
    validateFields
];

module.exports = {
    singUpValidator,
    singInValidator
}