import { db } from "../config/database";
import { User } from "../types";

// Function to create a new user
export const createUser = async (user: User) => {
  const sql =
    "INSERT INTO users (firstName, lastName, dateOfBirth, email, phone, password, role_id) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *";
  const result = await db.query(sql, [
    user.firstName,
    user.lastName,
    user.dateOfBirth,
    user.email,
    user.phone,
    user.password,
    (user.role_id = 2),
  ]);

  return "user created successfully";
};

// Function to create a student (example, can be adapted)
export const createStudent = (request: any, response: any) => {
  const { firstname, lastname, origin } = request.body;
  const sql =
    "INSERT INTO students (firstname, lastname, origin) VALUES ($1, $2, $3)";

  db.query(sql, [firstname, lastname, origin], (error: Error, results: any) => {
    if (error) {
      throw error;
    }
    response.status(201).send("Student added");
  });
};

// Function to get all users
export const getAllUsers = async () => {
  const sql = "SELECT * FROM users;";
  const result = await db.query(sql);
  return result.rows;
};

// Function to get a user by ID
export const getUserById = async (id: number) => {
  const sql = "SELECT * FROM users WHERE _id = $1";
  const result = await db.query(sql, [id]);
  return result.rows[0];
};

// Function to update a user
export const updateUser = async (id: number, user: User) => {
  const sql =
    "UPDATE users SET firstName = $1, lastName = $2, dateOfBirth = $3, email = $4, phone = $5, password = $6 WHERE _id = $7 RETURNING *";
  const result = await db.query(sql, [
    user.firstName,
    user.lastName,
    user.dateOfBirth,
    user.email,
    user.phone,
    user.password,
    id,
  ]);
  return "User updated successfully";
};

// Function to delete a user
export const deleteUser = async (id: number) => {
  const sql = "DELETE FROM users WHERE _id = $1 RETURNING *";
  const result = await db.query(sql, [id]);
  return "User deleted successfully";
};
