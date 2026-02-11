import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mainRoute from "./routes/index.js";
// import bodyParser from 'body-parser';
import { sequelize, connectDB } from "./config/databse.js";

import './models/index.js';
import {PORT} from './util/constant.js';
const app = express();

app.use(express.json());
app.get("/",(req,res)=>{
    return res.send("hello world");
})

app.use("/api",mainRoute);
// https://localhost:8080/api/user/add
// on seeing api then it will go to mainROute
app.listen(PORT,async()=>{
    console.log(`App start : http://localhost:${PORT}`);
    connectDB();
    await sequelize.sync();
});
