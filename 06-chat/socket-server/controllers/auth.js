const { response } = require('express');
const Usuario = require('../models/usuario');


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

        // TODO encriptar contraseña

        // Guardar en BD

        const usuario = new Usuario(req.body);
        await usuario.save();


        res.json({
            usuario
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