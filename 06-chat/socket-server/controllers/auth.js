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
            ok:true,
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

    const uid = req.uid;

    // Generar nuevo JWT
    const token = await generarJWT(uid)
    // Obtener el usuario por uid
    const usuario = await Usuario.findById(uid)

    res.json({
        ok: true,
        usuario,
        token,

    })
}

const Login = async (req, res = response) => {


    const { email, password } = req.body;
   try {

    const usuarioDB = await Usuario.findOne({email})
     if(!usuarioDB){
        return res.status(404).json({
            ok:false,
            msg:"Email no encontrado"
        })
     }

     //Validem password
     const validPassword = bcrypt.compareSync( password, usuarioDB.password )
     if(!validPassword){
        return res.status(400).json({
            ok:false,
            msg:"Password incorrecta"
        })
     }

     // Generar JWT

     const token = await generarJWT(usuarioDB.id)
     res.json({
        ok:true,
        usuario:usuarioDB,
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

module.exports = {
    crearUsuario,
    RenewToken,
    Login
}