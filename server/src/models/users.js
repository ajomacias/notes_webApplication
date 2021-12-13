const sequelize = require('../database/db')
const { Model,DataTypes } = require('sequelize')

class User extends Model{}
User.init({
    id_user:{
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey:true,
    },
    name_user:{
        type:DataTypes.STRING,
        allowNull: false},
    clave_user:{ 
        type:DataTypes.STRING,
        allowNull: false
    },
},{
    sequelize,
    modelName: "user",
    timestamps:false,
})

module.exports = User;