//importing express to create routers
const express=require('express');

//importing required controller to access database depending on request
const getController=require('../controllers/get.controller.js');

//creating router
const router=express.Router();

//defining Router actions
router.get('/',getController);

//exporting router in module
module.exports=router;