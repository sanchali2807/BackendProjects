import {Sequelize} from 'sequelize';

const sequelize = new Sequelize('G9_ECOM','root','sanchali',{
    host : 'localhost',
    dialect : 'mysql'
})
export const connectDB = async()=>{
    try{
        await sequelize.authenticate();
        console.log("databse connected successfully");
    }catch(error){
        console.log('error in connecting',error);
    }
}