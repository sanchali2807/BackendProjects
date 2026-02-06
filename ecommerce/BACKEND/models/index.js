import { sequelize } from "../config/databse.js";
import UserModel from './userModel.js';
import ProductModel from "./ProductModel.js";
import addressModel from "./addressModel.js";
const user = UserModel(sequelize);
const product = ProductModel(sequelize);
const address = addressModel(sequelize);
export {
    user,
    product,
    address
};