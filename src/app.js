import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
 

const app = express();


app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials : true
}));

app.use(express.json({limit: "50kb"}))
app.use(express.urlencoded({limit: "50kb", extended: true}))

app.use(express.static("public"))

 app.use(cookieParser());
 


export {app};