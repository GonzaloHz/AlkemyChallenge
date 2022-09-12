import { Router } from "express"
import { getOperations, createOperations, getOperationById, deleteOperationById, updateOperationById } from "../controllers/operationsControllers.js";


const router = Router();


router.get("/operation", getOperations)

router.post("/operation", createOperations)

router.get("/operation/:id", getOperationById)

router.delete("/operation/:id", deleteOperationById)

router.put("/operation/:id", updateOperationById)

export default router;