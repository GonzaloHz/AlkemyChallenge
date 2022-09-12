import { Router } from "express"
import { getUserById, getUsers, postUser, deleteUser, updateUser } from "../controllers/usersControlers.js";

const router = Router();

router.get("/users", getUsers)

router.get("/users/:id", getUserById)

router.post("/users", postUser)

router.delete("/users/:id", deleteUser)

router.put("/users/:id", updateUser)

export default router;