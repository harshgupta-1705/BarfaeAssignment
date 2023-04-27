//importing mongoose to create model
const mongoose=require('mongoose');

//defing user schema
const userSchema=mongoose.Schema({
    name: String,
    email: String,
    phone: Number
});

//creating model
const userModel=mongoose.model('users',userSchema);

//exporting model
module.exports=userModel;