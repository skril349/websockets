const { response } = require('express');
const Usuario = require('../models/usuario');
const bcrypt = require('bcryptjs');
const generarJWT = require('../helpers/jwt');


const crearUsuario = async (req, res = response) => {

    try {

        const { email, password } = req.body;

        // verificar que el email no exista

        const existeEmail = await Usuario.findOne({ email })
        if (existeEmail) {
            return res.status(400).json({
                ok: false,
                msg: "El email ya existe"
            })
        }

        const usuario = new Usuario(req.body);
        // TODO encriptar contraseña
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(password, salt)
        // Guardar en BD
        await usuario.save();



        // Generar jwt
        const token = await generarJWT(usuario.id);



        res.json({
            usuario,
            token
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: "Hable con el administrador"
        })
    }
}

const RenewToken = async (req, res = response) => {
    res.json({
        ok: true,
        msg: "renew"
    })
}

const Login = async (req, res = response) => {


    const { email, password } = req.body;
    res.json({
        ok: true,
        msg: 'login',
        email,
        password
    })
}

module.exports = {
    crearUsuario,
    RenewToken,
    Login
}