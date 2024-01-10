import { Request, Response } from 'express';
import Moralis from 'moralis';

const config = {
  domain: process.env.APP_DOMAIN || 'localhost',
  statement: 'Please sign this message to confirm your identity.',
  uri: process.env.REACT_URL || 'http://localhost:3000',
  timeout: 60,
};

export const requestMessage = async (req: Request, res: Response) => {
  const { address, chain, network } = req.body;

  try {
    const message = await Moralis.Auth.requestMessage({
      address,
      chain,
      ...config,
    });

    res.status(200).json(message);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
    console.error(error);
  }
};
