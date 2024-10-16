import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
 

const app = express();


app.use(cors({
    origin : process.env.CORS_ORIGIN || "http://localhost:8000",
    credentials : true
}));

app.use(express.json({limit: "50kb"}))
app.use(express.urlencoded({limit: "50kb", extended: true}))

app.use(express.static("public"))

 app.use(cookieParser());
 



 // routes import 

 import userRouter from './routes/user.routes.js';




 // routes declaraton 
 app.use("/api/v1/users",userRouter)

//  http://localhost:8000/api/v1/users/register      

export {app};