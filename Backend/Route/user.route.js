import express from 'express';
import { login, signUp } from '../Controller/user.controller.js';

const router = express.Router();

/*****************************Register user route*****************************/
router.post('/signup', signUp);

/*****************************Login user route*****************************/
router.post('/login', login);

export default router;
