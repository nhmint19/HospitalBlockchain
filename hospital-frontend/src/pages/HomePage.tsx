import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAccount, useConnect, useSignMessage, useDisconnect } from 'wagmi';
import { injected } from '@wagmi/connectors';
import axios from 'axios';

import { Button, Container, Typography, Grid, Divider, Alert } from '@mui/material';
import Layout from '../components/layout/Layout';
import FeatureCard from '../components/home/FeatureCard';
import WavyBackground from '../components/home/WavyBackground';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const { connectAsync } = useConnect();
  const { disconnectAsync } = useDisconnect();
  const { isConnected } = useAccount();
  const { signMessageAsync } = useSignMessage();

  const [error, setError] = useState('');

  const handleAuth = async () => {
    try {
      setError('');
      // disconnects the web3 provider if it's already active
      if (isConnected) {
        await disconnectAsync();
      }
      // enabling the web3 provider metamask
      const { accounts } = await connectAsync({
        connector: injected(),
      });

      const userData = { address: accounts[0], chain: 1 };
      // making a post request to our 'request-message' endpoint
      const { data } = await axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/request-message`, userData, {
        headers: {
          'content-type': 'application/json',
        },
      });
      const message = data.message;
      // signing the received message via metamask
      const signature = await signMessageAsync({ message });

      await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/auth/verify`,
        {
          message,
          signature,
        },
        { withCredentials: true }, // set cookie from Express server
      );

      // redirect to dashboard
      navigate('/dashboard');
    } catch (error: any) {
      setError(error.message);
    }
  };
  return (
    <Layout>
      {error && <Alert severity="error" className="sticky top-16 left-0 z-[1001]">{error}</Alert>}
      <WavyBackground>
        <div className="flex items-center justify-center flex-col text-black text-center h-[80vh]">
          <Typography variant="h3" mb={2}>
            Welcome to Our App
          </Typography>
          <Typography variant="h6">Revolutionizing Hospital Collaboration</Typography>
          <Button
            variant="contained"
            className="bg-primaryLight"
            // component={Link}
            style={{ marginTop: '16px' }}
            onClick={handleAuth}
            // to="/login"
          >
            Login with MetaMask
          </Button>
        </div>
      </WavyBackground>
      <Divider orientation="horizontal" className="!mx-[5%]" />
      <Container className="my-6 !flex h-[50vh]">
        <div className="w-1/2">
          <Typography variant="h4" mt={2} mb={3}>
            About Our App
          </Typography>
          <Typography variant="h6">
            Our Hospital Collaboration App is designed to streamline the exchange of patient records securely and
            efficiently between healthcare professionals and institutions. With blockchain technology, we ensure the
            highest level of security and transparency.
          </Typography>
        </div>
        <div className="w-1/2 flex justify-center text-primaryLight">
          <img src="./hospital.svg" alt="Hospital" className="text-primaryLight" />
        </div>
      </Container>
      <Divider orientation="horizontal" className="!mx-[5%]" />
      <Container className="my-6">
        <Typography variant="h4" mt={2} mb={3}>
          Key Features
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <FeatureCard
              title={`Secure Document Exchange`}
              desc={`Share medical records and documents with confidence, knowing they are protected by blockchain
                  security.`}
              learnMore={handleAuth}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FeatureCard
              title={`Zero Knowledge Data Analysis`}
              desc={`Analyse the patients' records and visualise the data...`}
              learnMore={handleAuth}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FeatureCard
              title={`User-Friendly Interface`}
              desc={`Our intuitive interface makes it easy to manage patient records and collaborate with other medical
              professionals.`}
              learnMore={handleAuth}
            />
          </Grid>
        </Grid>
      </Container>

      <footer className="mt-10 bg-primaryDarkBg text-textDark py-3 text-center">
        <Typography variant="body2">Powered by Partisia | All rights reserved</Typography>
      </footer>
    </Layout>
  );
};

export default HomePage;
