
const mongoose = require('mongoose');
const dbConnection = async()=>{
    try{
        mongoose.connect(process.env.DB_CNN_STRING,{
            useNewUrlParser:true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        console.log("DB online")
    }catch(error){
        throw new Error("Error en la DB")
    }
}

module.exports = {
    dbConnection
};