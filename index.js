/*
    importing required modules to create express instance
*/
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();//configuring env file

//creating express instance
const app=express();

//connecting to Atlas mongo Db cloud using mongoose
const db = require('./database/db');

//importing routes to handle end-points
const getRoutes=require('./routes/get.routes.js');
const postRoutes=require('./routes/post.routes.js');

//adding middleware to handle request and response
app.use(express.json());
app.use(cors());

//Adding routes to handle Http request in express
app.use('/get',getRoutes);
app.use('/post',postRoutes);

//enabling application to listen request from Port
const port=process.env.PORT; 
app.listen(port, () => {
    console.log(`kudos! App is up and running at port : ${process.env.PORT}`);
  });