import { Router } from 'express';

const authRouter = Router();

// Sign up a new user
authRouter.post('/signup', () => console.log('Auth signup'));

export default authRouter;
