const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    userid : {type: Number, default:null},
    email: {type: String, default:null},
    phone: {type: String, default:null},
    name:{type:String,default:null},
    tickets:{type:Number,default:0},
    status:{type:String,default:false},
    txnid:{type:[String],default:[]}
  
}, {
    timestamps: {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt'
    },
    
});

const User = mongoose.model('Android_db', userSchema);
module.exports = User;