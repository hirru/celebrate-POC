import { Request, Response } from "express";
import User from "../models/user";

class UserController {
  getAllUsers = async (req: Request, res: Response) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

  getUserById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const user = await User.findById(id);
      if (!user) return res.status(404).json({ error: "User not found" });
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

  createUser = async (req: Request, res: Response) => {
    const { name, email, age } = req.body;
    try {
      const user = await User.create({ name, email, age });
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

  updateUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, email, age } = req.body;
    try {
      const user = await User.findByIdAndUpdate(
        id,
        { name, email, age },
        { new: true }
      );
      if (!user) return res.status(404).json({ error: "User not found" });
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

  deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const user = await User.findByIdAndDelete(id);
      if (!user) return res.status(404).json({ error: "User not found" });
      res.json({ message: "User deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
}

export default new UserController();
