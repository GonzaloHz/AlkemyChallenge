import User from './user'
import Operation from './operation'

User.hasMany(Operation,{foreignKey:'operationId'})
Operation.belongsTo(User,{foreignKey:'operationId'})