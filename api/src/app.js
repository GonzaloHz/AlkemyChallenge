import express from "express"
import operationRoutes from "./routes/operationsRoutes.js"
import usersRoutes from "./routes/usersRoutes.js"


const app= express();


app.use("/api/auth", operationRoutes)
app.use("/api/auth", usersRoutes)

export default app;