"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// app.ts
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const dbConnection_1 = require("./dbConnection"); // Import the connectDB function
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
(0, dotenv_1.config)();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
// Connect to MongoDB using the function from dbConnection.ts
(0, dbConnection_1.connectDB)();
// Middleware
app.use(express_1.default.json());
// Routes
app.use('/users', userRoutes_1.default);
// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
