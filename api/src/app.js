import express from "express"
import operationRoutes from "./routes/operationsRoutes.js"


const app= express();


app.use(operationRoutes)

export default app;