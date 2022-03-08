const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    userid : {type: Number, default:null},
    email: {type: String, default:null},
    phone: {type: String, default:null},
    name:{type:String,default:null},
    college: {type: String, default:null},
    status:{type:Number,default:false},
    workshopstatus:{type:Number,default:0},
    password: {type: String,default:null},
    dept:{type:String,default:null},
    year:{type:Number,default:null},
    txnid:{type:String,default:null}
  
}, {
    timestamps: {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt'
    },
    
});

const User = mongoose.model('Event_db', userSchema);
module.exports = User;