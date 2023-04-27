//importing express to create routers
const express=require('express');

//importing required controller to access database depending on request
const postController=require('../controllers/post.controller.js');

//creating router
const router=express.Router();

//defining Router actions
router.post('/',postController);

//exporting router in module
module.exports=router;