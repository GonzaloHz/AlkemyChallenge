import { Router } from "express"
import { getUserById, getUsers, postUser, deleteUser, updateUser, loginUser } from "../controllers/usersControlers.js";

const router = Router();

router.get("/users", getUsers)

router.get("/users/:id", getUserById)

router.post("/users", postUser)

router.delete("/users/:id", deleteUser)

router.put("/users/:id", updateUser)

router.get("/userloggin", loginUser)

export default router;