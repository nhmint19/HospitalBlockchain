import { Request, Response } from 'express';

export const logout = async (req: Request, res: Response) => {
  try {
    res.clearCookie('jwt');
    return res.sendStatus(200);
  } catch {
    return res.sendStatus(403);
  }
};
