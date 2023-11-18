import express from 'express';
import userController from '../controllers/userController';
import { celebrate, Joi, Segments } from 'celebrate';

const router = express.Router();

// Define validation schema
const userValidationSchema = {
  [Segments.BODY]: Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    age: Joi.number().integer(),
  }),
};

// Define routes
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', celebrate(userValidationSchema), userController.createUser);
router.put('/:id', celebrate(userValidationSchema), userController.updateUser);
router.delete('/:id', userController.deleteUser);

export default router;
