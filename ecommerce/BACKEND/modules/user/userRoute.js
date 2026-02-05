import express from 'express';
import { addUser, getUser } from './userController.js';
const router = express.Router();
//A Router decides where a request should go based on the URL.
router.post("/add",addUser);
router.get("/",getUser);
// api endpoints
export default router; 
