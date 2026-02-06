import { sequelize } from "../config/databse.js";
import UserModel from './userModel.js';
import ProductModel from "./ProductModel.js";
const user = UserModel(sequelize);
const product = ProductModel(sequelize);
export {user,product};