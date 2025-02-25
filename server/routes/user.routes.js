import express from 'express';
import { loginUser, signupUser } from '../controllers/user.controller.js';
import { userVerifications } from '../middlewares/AuthMiddleware.js';

const router = express.Router();

//login route

router.post('/login', loginUser);

//signup route

router.post('/signup', signupUser);

//checks if user has access to the route

router.post('/', userVerifications)

export default router;