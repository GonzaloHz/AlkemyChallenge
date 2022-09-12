import { DataTypes } from 'sequelize';
import sequelize from "../database/database.js"

export const User = sequelize.define("User", {
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true
        },
        state:{
            type:DataTypes.BOOLEAN,
            defaultValue:true
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false
        }
    })