const User = require('./User')
const Operation = require('./Operation')

User.hasMany(Operation,{foreignKey:'operationId'})
Operation.belongsTo(User,{foreignKey:'operationId'})