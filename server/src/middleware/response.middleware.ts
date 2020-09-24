import { Request, NextFunction } from 'express';

const responseMiddleware = (
  // tslint:disable-next-line: variable-name
  _req: Request,
  res: any,
  next: NextFunction,
) => {
  res.success = (message: string, data: any) => {
    return res.status(200).json({
      message,
      data,
      status: 'success',
    });
  };

  res.error = (message: string, data: any) => {
    return res.status(400).json({
      message,
      data,
      status: 'error',
    });
  };

  res.warning = (message: string, data: any) => {
    return res.status(400).json({
      message,
      data,
      status: 'warning',
    });
  };

  next();
};

export default responseMiddleware;
