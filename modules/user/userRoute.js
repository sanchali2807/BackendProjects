import express from 'express';
import { addUser, deleteUser, getUser, updateUser ,loginUser} from './userController.js';
const router = express.Router();
//A Router decides where a request should go based on the URL.
router.post("/add",addUser);
router.get("/",getUser);
router.put("/update/:id",updateUser);
router.delete("/delete/:id",deleteUser);
router.post("/login",loginUser);
// api endpoints
export default router; 
