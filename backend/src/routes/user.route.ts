import { Router } from "express";
import * as UserController from "../controllers/user.controller";

const router = Router();

router.get("/users/", UserController.getAllUsers);
router.get("/users/:id", UserController.getUserById);
router.post("/users/create", UserController.createUser);
router.put("/users/:id", UserController.updateUser);
router.delete("/users/:id", UserController.deleteUser);

export default router;
