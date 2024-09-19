import { db } from "../config/database";
import { Role } from "../types";

// Function to create a new role
export const createRole = async (role: Role) => {
  const sql =
    "INSERT INTO roles (name, description, isdelete) VALUES ( $1, $2, $3)";
  const result = await db.query(sql, [
    role.name,
    role.description,
    role.isdelete,
  ]);

  return "role created successfully";
};

// Function to get all roles
export const getAllRoles = async () => {
  const sql = "SELECT * FROM roles";
  const result = await db.query(sql);
  return result.rows;
};

// Function to get a role by ID
export const getRoleById = async (id: number) => {
  const sql = "SELECT * FROM roles WHERE _id = $1";
  const result = await db.query(sql, [id]);
  return result.rows;
};

// Function to update a role
export const updateRole = async (id: number, role: Role) => {
  const sql =
    "UPDATE roles SET name = $1, description = $2, isdelete = $3 WHERE _id = $4 RETURNING *";
  const result = await db.query(sql, [
    role.name,
    role.description,
    role.isdelete,
    id,
  ]);
  return "Role updated successfully";
};

// Function to delete a role
export const deleteRole = async (id: number) => {
  const sql = "DELETE FROM roles WHERE _id = $1 RETURNING *";
  const result = await db.query(sql, [id]);
  return "Role deleted successfully";
};
