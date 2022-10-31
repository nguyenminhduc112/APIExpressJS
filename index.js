const  express = require( "express");
// const express = require('express') // này tương tự import  express  from "express";
const bodyParser = require('body-parser'); // Phần này giúp chúng ta nhận lại nội dung request từ client
const mongoose = require("mongoose");
// require('dotenv/config');
// Lib Routes
const userRouter = require('./routers/user.js') ;
const app = express();
const port = 5000;
// npm i mongoose, npm i dotenv
// Middle ware
app.use(bodyParser.json()); // Này thể hiện các dữ liệu được request trên ứng dựng đều là 
// Connect the mongo db
mongoose.connect("mongodb+srv://ducdeptrai:ducdeptrai@cluster0.kxqezcb.mongodb.net/?retryWrites=true&w=majority",()=>{
    console.log("Connected Mongo DB")
});
// Routes
app.get('/',(req,res)=>{
    res.send('Trang Chủ')
});
app.use('/users',userRouter);


app.listen(port,()=>{
    console.log(`Server running on port: http://localhost:${port}`);
})