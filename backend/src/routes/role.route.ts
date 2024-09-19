import { Router } from "express";
import * as RoleController from "../controllers/role.controller";

const router = Router();

router.get("/role/", RoleController.getAllRoles);
router.get("/role/:id", RoleController.getRoleById);
router.post("/role/create", RoleController.createRole);
router.put("/role/:id", RoleController.updateRole);
router.delete("/role/:id", RoleController.deleteRole);

export default router;
