const UserModel =(sequelize)=>{
return sequelize.define('user',{
    name:{
        type:DataTypes.STRING,
        allowNull:false,

    },
    email:{
        type:DtaTypes.STRING,
        allowNull:false,
        unique:true
    },
    password:{
        type:DtaTypes.STRING,
        allowNull:false,
        
    },
    role:{
        type:DataTypes.STRING,
        allowNull:false,
        defaultVaue:'USER'

    },
    isActive:{
         type:DataTypes.BOOLEAN,
        allowNull:false,
        defaultVaue:false,
    }  
})
}
export default UserModel;