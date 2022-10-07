import {User} from './User.js'
import {Operation} from './Operation.js'

User.hasMany(Operation,{foreignKey:'operationId'})
Operation.belongsTo(User,{foreignKey:'operationId'})