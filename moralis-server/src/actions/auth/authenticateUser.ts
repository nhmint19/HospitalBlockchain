import { Request, Response } from 'express';

const jwt = require('jsonwebtoken');

export const authenticateUser = async (req: Request, res: Response) => {
  const token = req.cookies.jwt;
  if (!token) return res.sendStatus(403); // if the user did not send a jwt token, they are unauthorized

  try {
    const data = jwt.verify(token, process.env.AUTH_SECRET);
    res.json(data);
  } catch {
    return res.sendStatus(403);
  }
};
