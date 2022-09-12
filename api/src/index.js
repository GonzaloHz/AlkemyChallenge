import express from "express"
import sequelize from "./database/database.js"
// import "./models/Operation.js"
// import "./models/User.js"
import APP from "./app.js"

const app = express();
const PORT = 3000;

//middlewares
app.use(express.json());
// app.use(express.urlencoded({extended: false}))

//routes
app.use(APP)

async function main(){
    //dbConection
    try {
        await sequelize.sync();
        console.log('Connection has been established successfully.');
    app.listen(PORT,()=>{
    console.log(`Server on port ${PORT}`)
    });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
main();