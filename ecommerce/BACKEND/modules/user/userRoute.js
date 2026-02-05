import express from 'express';
import { addUser } from './userController.js';
const router = express.Router();
//A Router decides where a request should go based on the URL.
router.post("/add",addUser);
// api endpoints
export default router; 
