const {Router}= require('express');
const { singUp, singIn } = require('../controllers');
const { singUpValidator, singInValidator } = require('../validatiors');
const router = Router();

router.post('/signin',singInValidator,singIn);
router.post('/signup',singUpValidator,singUp);

module.exports = router;
