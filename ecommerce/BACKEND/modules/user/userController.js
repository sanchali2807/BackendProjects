import { addUserService, getUserService } from "./userService.js"

export const addUser = async(req,res)=>{
    // no need for try catch as it is written in service
    const result = await addUserService(req.body);
    return res.status(result.statusCode).json({result});
    // we pass the result to the json so that it is converted to json code
}
export const getUser = async(req,res)=>{
    const result = await getUserService();
    return res.status(result.statusCode).json({result});
}