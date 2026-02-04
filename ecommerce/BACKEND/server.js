import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
// import bodyParser from 'body-parser';
import { sequelize, connectDB } from "./config/databse.js";

import './models/index.js';
import {PORT} from './util/constant.js';
const app = express();

app.use(express.json());
app.get("/",(req,res)=>{
    return res.send("hello world");
})

app.listen(PORT,async()=>{
    console.log(`App start : http://localhost:8080`);
    connectDB();
    await sequelize.sync();
});
