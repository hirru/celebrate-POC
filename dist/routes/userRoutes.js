"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = __importDefault(require("../controllers/userController"));
const celebrate_1 = require("celebrate");
const router = express_1.default.Router();
// Define validation schema
const userValidationSchema = {
    [celebrate_1.Segments.BODY]: celebrate_1.Joi.object({
        name: celebrate_1.Joi.string().required(),
        email: celebrate_1.Joi.string().email().required(),
        age: celebrate_1.Joi.number().integer(),
    }),
};
// Define routes
router.get('/', userController_1.default.getAllUsers);
router.get('/:id', userController_1.default.getUserById);
router.post('/', (0, celebrate_1.celebrate)(userValidationSchema), userController_1.default.createUser);
router.put('/:id', (0, celebrate_1.celebrate)(userValidationSchema), userController_1.default.updateUser);
router.delete('/:id', userController_1.default.deleteUser);
exports.default = router;
