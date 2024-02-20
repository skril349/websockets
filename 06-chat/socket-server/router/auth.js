/* 

    path: api/login

*/

const {Router} = require('express');
const { crearUsuario, RenewToken, Login } = require('../controllers/auth');
const { check } = require('express-validator');
const router = Router();

//Crear nuevos usuarios
router.post('/new',crearUsuario)

//Login
router.post('/',[
    check('email','El email es obligatorio').isEmail(),
    check('password','El password es obligatorio').not().isEmpty()

],Login)

// Revalidar token

router.get('/renew',RenewToken)

module.exports = router;