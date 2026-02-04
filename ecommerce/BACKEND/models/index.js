import { sequelize } from "../config/databse.js";
import UserModel from './userModel.js';
const user = UserModel(sequelize);
export {user};