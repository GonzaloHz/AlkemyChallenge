import { Router } from "express";
import { getUserById, getUsers, postUser, deleteUser, updateUser, loginUser } from "../controllers/usersControlers.js";
import { validateJWT } from "../middlewares/jwt-validator.js";
import { check } from "express-validator";

const router = Router();

router.get("/users", getUsers)

router.get("/users/:id", validateJWT, getUserById)

router.post("/users",
    [
        check("name", "Name is required").not().isEmpty(),
        check("password", "Password is required").not().isEmpty(),
        check("email", "Wrong email").isEmail(),
        // validateJWT
    ],
 postUser)

router.delete("/users/:id", validateJWT, deleteUser)

router.put("/users/:id", validateJWT, updateUser)

router.post("/userloggin", loginUser)

export default router;