import { Router } from "express"
import { getOperations, createOperations, getOperationById, deleteOperationById, updateOperationById, getTotalOperation } from "../controllers/operationsControllers.js";


const router = Router();


router.get("/operation/:id", getOperations)

router.post("/operation/:id", createOperations)

router.get("/operation/:id", getOperationById)

router.delete("/operation/:id", deleteOperationById)

router.put("/operation/:id", updateOperationById)

router.get("/totalOps/:id", getTotalOperation)

export default router;