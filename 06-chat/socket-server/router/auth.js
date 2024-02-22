/* 

    path: api/login

*/

const {Router} = require('express');
const { crearUsuario, RenewToken, Login } = require('../controllers/auth');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const router = Router();

//Crear nuevos usuarios
router.post('/new',[
    check('nombre', 'El nombre es obligatorio').isString(),
    check('email','El email es obligatorio').isEmail(),
    check('password','El password es obligatorio').isString(),
    validarCampos
],crearUsuario)


//Login
router.post('/',[
    check('email','El email es obligatorio').isEmail(),
    check('password','El password es obligatorio').not().isEmpty(),
    validarCampos

],Login)

// Revalidar token

router.get('/renew',validarJWT,RenewToken)

module.exports = router;