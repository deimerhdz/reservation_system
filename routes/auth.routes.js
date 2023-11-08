const {Router}= require('express');
const { singUp, singIn, renewToken } = require('../controllers');
const { singUpValidator, singInValidator } = require('../validatiors');
const { validateJWT } = require('../middlewares/validateJwt');
const router = Router();

router.post('/signin',singInValidator,singIn);
router.post('/signup',singUpValidator,singUp);
router.get('/check-token',validateJWT,renewToken);
module.exports = router;
