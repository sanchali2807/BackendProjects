import express from 'express';
import userRoute from '../modules/user/userRoute.js';
const router = express.Router();
router.use("/user",userRoute);
export default router;

// default import export :: can we imported using any name 
// named import always in curly bracket and name must be same 


// https://localhost:8080/api/user/add
// here now it will go to user route then to addUser
// {"name"}