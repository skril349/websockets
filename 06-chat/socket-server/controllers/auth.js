const { response } = require('express');
const Usuario = require('../models/usuario');


const crearUsuario = async(req,res = response)=>{

    try {

        const { email, password } = req.body;

        // verificar que el email no exista

        const existeEmail = await Usuario.findOne({email})


        res.json({
            email,
            password
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok:false,
            msg:"Hable con el administrador"
        })
    }
}

const RenewToken = async(req,res = response)=>{
    res.json({
        ok:true,
        msg:"renew"
    })
}

const Login = async(req,res = response)=>{

  
    const {email,password} = req.body;
    res.json({
        ok:true,
        msg:'login',
        email,
        password
    })
}

module.exports = {
    crearUsuario,
    RenewToken,
    Login
}