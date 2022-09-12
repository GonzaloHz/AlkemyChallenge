import {DataTypes} from 'sequelize';
import sequelize from "../database/database.js"

export const Operation = sequelize.define('Register',{
        Name:{
            type:DataTypes.STRING,
            allowNull:false
        },    
        Concept:{
            type:DataTypes.STRING
        },
        Total:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },
        Date:{
            type:DataTypes.STRING,
        },
        Type:{
            type:DataTypes.ENUM({
                values: ['Entry', 'Egress']
              }),
            allowNull:false
        },
        state:{
            type:DataTypes.BOOLEAN,
            defaultValue:true
        }
    })