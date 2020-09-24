import { Router, Request, Response } from 'express';

const authRouter = Router();

// Sign up a new user
// tslint:disable-next-line: variable-name
authRouter.post('/signup', (_req: Request, res: Response) => {
  return res.json({
    msg: 'hello',
  });
});

export default authRouter;
