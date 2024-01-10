import Moralis from 'moralis';
import authRoutes from './routes/auth';

const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 4000;

// to use our .env variables
require('dotenv').config();

app.use(express.json());
app.use(cookieParser());

// allow access to React app domain
app.use(
  cors({
    origin: process.env.REACT_URL || 'http://localhost:3000',
    credentials: true,
  }),
);

// authentication
app.use('/auth', authRoutes);

const startServer = async () => {
  await Moralis.start({
    apiKey: process.env.MORALIS_API_KEY,
  });

  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
};

startServer();
