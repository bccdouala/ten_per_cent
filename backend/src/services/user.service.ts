import * as UserModel from "../models/user.model";
import { User } from "../types";

export const createUser = async (user: User) => {
  return await UserModel.createUser(user);
};

export const getAllUsers = async () => {
  return await UserModel.getAllUsers();
};

export const getUserById = async (id: number) => {
  return await UserModel.getUserById(id);
};

export const deleteUser = async (id: number) => {
  return await UserModel.deleteUser(id);
};

export const updateUser = async (id: number, user: User) => {
  return await UserModel.updateUser(id, user);
};
