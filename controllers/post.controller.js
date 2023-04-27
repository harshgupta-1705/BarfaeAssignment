//importing database model to fetch data from database
const userModel=require('../models/user.model.js');

//defing controller to handle post request
const controller=async(req,res)=>{
    try{
        const {name,email,phone}=req.body;
        await userModel.create({'name':name,'email':email,'phone':phone});
        return res.status(200).json({'status':'Success','result':"user added"});
    }
    catch(err)
    {
        console.log(err);
        return res.status(400).json({'status':'Fail','error':err.message});
    }
};

//exporting controller in module
module.exports=controller;