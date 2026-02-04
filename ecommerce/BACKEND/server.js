import express from 'express';
import bodyParser from 'body-parser';
import { connectDB } from './config/databse.js';
const app = express();
app.use(bodyParser.json());
app.get("/",(req,res)=>{
    return res.send("hello world");
})
app.listen(8080,()=>{
    console.log(`App start : http://localhost:8080`);
    connectDB();
});
