import { Request, Response } from 'express';
import Moralis from 'moralis';

const jwt = require('jsonwebtoken');

export const verifySignature = async (req: Request, res: Response) => {
  try {
    const { message, signature } = req.body;

    const { address, profileId } = (
      await Moralis.Auth.verify({
        message,
        signature,
        networkType: 'evm',
      })
    ).raw;

    const user = { address, profileId, signature };

    // create JWT token
    const token = jwt.sign(user, process.env.AUTH_SECRET);

    // set JWT cookie
    res.cookie('jwt', token, {
      httpOnly: true,
    });

    res.status(200).json(user);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
    console.error(error);
  }
};
