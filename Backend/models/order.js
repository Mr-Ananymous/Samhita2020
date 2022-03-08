const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    userid : {type: Number, default:null},
  
}, {
    timestamps: {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt'
    },
    
});

const User = mongoose.model('order_db', userSchema);
module.exports = User;