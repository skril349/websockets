const { validationResult } = require("express-validator")


const crearUsuario = async(req,res = response)=>{
    res.json({
        ok:true,
        msg:'new'
    })
}

const RenewToken = async(req,res = response)=>{
    res.json({
        ok:true,
        msg:"renew"
    })
}

const Login = async(req,res = response)=>{

    const errores = validationResult(req)
    if(!errores.isEmpty()){
        return res.status(400).json({
            ok:false,
            errors:errores.mapped()
        })
    }
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