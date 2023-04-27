//importing database model to fetch data from database
const userModel=require('../models/user.model.js');

//defing controller to handle get request
const controller=async(req,res)=>{
    try{
        const data=await userModel.find({});
        return res.status(200).json({'status':'Success','result':data});
    }
    catch(err)
    {
        console.log(err);
        return res.status(400).json({'status':'Fail','error':err.message});
    }
};

//exporting controller in module
module.exports=controller;