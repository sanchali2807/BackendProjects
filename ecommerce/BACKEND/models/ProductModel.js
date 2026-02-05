import { DataTypes } from "sequelize";
const ProductModel =(sequelize)=>{
return sequelize.define('product',{
    name:{
        type:DataTypes.STRING,
        allowNull:false,

    },
    decription:{
        type:DtaTypes.STRING,
        allowNull:false,
    },
    price:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    discountPrice:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    brand:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    category:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    store:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    isActive:{
         type:DataTypes.BOOLEAN,
        allowNull:false,
        defaultVaue:false,
    }  
})
}
export default ProductModel;