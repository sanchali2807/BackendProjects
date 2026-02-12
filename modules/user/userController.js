import { addUserService, deleteUserService, getUserService, updateUserService ,loginUserService} from "./userService.js"

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
export const updateUser= async(req,res)=>{
    const id = req.params.id;
    console.log(req);
    const result = await updateUserService(id,req.body);
    return res.status(result.statusCode).json({result});
}
export const deleteUser = async(req,res)=>{
    const id = req.params.id;
    console.log(req);
    const result = await deleteUserService(id);
    return res.status(result.statusCode).json({result});
}
export const loginUser=async(req,resp)=>{
    const result=await loginUserService(req.body);
    if(result.result && result.result.token){
        resp.cookie('token',result.result.token,{
            httpOnly:true,
            secure:false,
            samesite:'strict'
        })
    }
    return resp.status(result.statusCode).json({
        result
    }) 
}