import { Request, Response } from "express";
import { User } from "../types";
import * as userService from "../services/user.service";

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = req.body as User;
    const createdUser = await userService.createUser(user);
    res.status(201).json(createdUser);
  } catch (error) {
    res.status(400).json({ message: "User not created" });
  }
};

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: "Users not found" });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const user = await userService.getUserById(Number(id));

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: "User not found" });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = req.body as User;
    const updatedUser = await userService.updateUser(Number(id), user);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(404).json({ message: "User not updated" });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedUser = await userService.deleteUser(Number(id));
    res.status(200).json(deletedUser);
  } catch (error) {
    res.status(404).json({ message: "User not deleted" });
  }
};
