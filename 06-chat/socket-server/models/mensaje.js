const {Schema, model} = require('mongoose') 

const MensajeSchema = Schema({

    de:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'Usuario'
    },
    para:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'Usuario'
    },
    mensaje:{
        type:String,
        required:true,

    },


},{
    timestamps:true
})

MensajeSchema.method('toJSON',function(){
    const {__v,...object} = this.toObject();
    object.uid = _id;
    return object;
})


module.exports = model('Mensaje',MensajeSchema);