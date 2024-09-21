import { Request, Response } from "express";
import { Role } from "../types";
import * as RoleService from "../services/role.service";

export const createRole = async (req: Request, res: Response) => {
  try {
    const role = req.body;

    if (!role) {
      res.status(404).json({ message: "Invalid body request" });
      return;
    }

    const createdRole = await RoleService.createRole(role);

    res.status(201).json(createdRole);
  } catch (error) {
    res.status(400).json({ message: "role not created" });
  }
};

export const getAllRoles = async (req: Request, res: Response) => {
  try {
    const roles = await RoleService.getAllRoles();
    res.status(200).json(roles);
  } catch (error) {
    res.status(404).json({ message: "roles not found" });
  }
};

export const getRoleById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const role = await RoleService.getRoleById(Number(Number(id)));
    res.status(200).json(role);
  } catch (error) {
    res.status(404).json({ message: "role not found" });
  }
};

export const updateRole = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const role = req.body as Role;
    const updatedRole = await RoleService.updateRole(Number(id), role);
    res.status(200).json(updatedRole);
  } catch (error) {
    res.status(404).json({ message: "role not updated" });
  }
};

export const deleteRole = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedRole = await RoleService.deleteRole(Number(id));
    res.status(200).json(deletedRole);
  } catch (error) {
    res.status(404).json({ message: "role not deleted" });
  }
};
