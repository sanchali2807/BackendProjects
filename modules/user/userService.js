// import { where } from "sequelize";
import { user as User} from "../../models/index.js";

export const addUserService = async(data)=>{
    try{
        // two method create and build but in build we not to use save command as well
        const result = await User.create(data);
        return {
            statusCode:201,
            result
        }
    }catch(error){
        return {
            statusCode:400,
            message:error.message
        }
    }
}
export const getUserService = async()=>{
    try{
const result = await User.findAll();
// const result = await User.findByPk(2);
// here attributes can be used for any specufic attribute
        return {
            statusCode:201,
            result
        }
    }catch(error){
        return {statusCode:400,message:error.message}
    }
}
export const updateUserService = async(id,data)=>{
    const user = await User.findByPk(id);
    if(!user){
        return {
            statusCode:400,
            message:"User not found"
        }
    }
    try{
        const result = await user.update(data);
        return{
            statusCode:200,
            result
        }

    }catch(error){
        return {
            statusCode:400,
            message:error.message
        }
    }
}
export const deleteUserService = async(id)=>{
    try{
        const user = await User.findByPk(id);
        if(!user){
        return{
            statusCode:404,
            message: "User not found"
        }
    }
        await user.destroy();
        return {
            statusCode: 200,
            message: "User deleted successfully"
        };
    }catch(error){
        return{
            statusCode:400,
            message:error.message
        }
    }
}