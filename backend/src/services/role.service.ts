import * as RoleModel from "../models/role.model";
import { Role } from "../types";

export const createRole = async (role: Role) => {
  return await RoleModel.createRole(role);
};

export const getAllRoles = async () => {
  return await RoleModel.getAllRoles();
};

export const getRoleById = async (id: number) => {
  return await RoleModel.getRoleById(id);
};

export const deleteRole = async (id: number) => {
  return await RoleModel.deleteRole(id);
};

export const updateRole = async (id: number, role: Role) => {
  return await RoleModel.updateRole(id, role);
};
