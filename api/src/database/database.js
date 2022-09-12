import { Sequelize } from "sequelize";

const sequelize = new Sequelize('AlkemyChallenge', 'postgres', '12345', {
    host: 'localhost',
    dialect: 'postgres'
});

export default sequelize;
