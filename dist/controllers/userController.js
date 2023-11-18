"use strict";
// src/controllers/userController.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../models/user"));
class UserController {
    constructor() {
        this.getAllUsers = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield user_1.default.find();
                res.json(users);
            }
            catch (error) {
                res.status(500).json({ error: "Internal Server Error" });
            }
        });
        this.getUserById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const user = yield user_1.default.findById(id);
                if (!user)
                    return res.status(404).json({ error: "User not found" });
                res.json(user);
            }
            catch (error) {
                res.status(500).json({ error: "Internal Server Error" });
            }
        });
        this.createUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { name, email, age } = req.body;
            try {
                const user = yield user_1.default.create({ name, email, age });
                res.status(201).json(user);
            }
            catch (error) {
                res.status(500).json({ error: "Internal Server Error" });
            }
        });
        this.updateUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { name, email, age } = req.body;
            try {
                const user = yield user_1.default.findByIdAndUpdate(id, { name, email, age }, { new: true });
                if (!user)
                    return res.status(404).json({ error: "User not found" });
                res.json(user);
            }
            catch (error) {
                res.status(500).json({ error: "Internal Server Error" });
            }
        });
        this.deleteUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const user = yield user_1.default.findByIdAndDelete(id);
                if (!user)
                    return res.status(404).json({ error: "User not found" });
                res.json({ message: "User deleted successfully" });
            }
            catch (error) {
                res.status(500).json({ error: "Internal Server Error" });
            }
        });
    }
}
exports.default = new UserController();
