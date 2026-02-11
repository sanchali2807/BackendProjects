import dotenv from 'dotenv';
dotenv.config();
import {Sequelize} from 'sequelize';
const sequelize = new Sequelize(
    process.env.DB_NAME,
  process.env.DB_USER,     
  process.env.DB_PASSWORD,    
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
)
export { sequelize };
// const sequelize = new Sequelize('G9_ECOM','root','sanchali',{
//     host : 'localhost',
//     dialect : 'mysql'
// })
export const connectDB = async()=>{
    try{
        await sequelize.authenticate();
        console.log("databse connected successfully");
    }catch(error){
        console.log('error in connecting',error);
    }
}