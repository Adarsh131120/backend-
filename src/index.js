import mongoose, { connect } from "mongoose";



// require('dotenv').config({path : './env'})

import connectDB from "./db/index.js";

import dotenv from 'dotenv';
dotenv.config({
    path: './env'
})



// function connectDB(){}


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000 ,()=>{
        console.log(`Server is running on port ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("MONGODB CONNECTION ERROR : ",err)
})

























// import express from "express";

// const app = express();


// (async()=>{
//     try{
//  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//    app.on("error",()=>{
//     console.log("Error connecting to database")
//     throw error;
//    })

//    app.listen(process.env.PORT,()=>{
//     console.log(`Server is running on port ${process.env.PORT}`)
//     }
// )}

//     catch(error){
//         console.log("ERROR :" ,error)
//         throw error;
//     }
// })()

// connectDB();