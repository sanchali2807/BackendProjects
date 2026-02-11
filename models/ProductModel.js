import { DataTypes } from "sequelize";
const ProductModal =(sequelize)=>{
return sequelize.define('product',{
    name:{
        type:DataTypes.STRING,
        allowNull:false,

    },
    decription:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    price:{
        type:DataTypes.DECIMAL(0,2),
        allowNull:false,
    },
    discountPrice:{
        type:DataTypes.DECIMAL(0.2),
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
export default ProductModal;