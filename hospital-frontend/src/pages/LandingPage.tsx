import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you have set up routing

import {
  Button,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  AppBar,
  Toolbar,
} from '@mui/material';

const LandingPage: React.FC = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Hospital Collaboration</Typography>
        </Toolbar>
      </AppBar>

      <div
        style={{
          backgroundColor: '',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '250px', // Adjust the height as needed
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          color: 'black',
          textAlign: 'center',
        }}
      >
        <Typography variant="h3">Welcome to Our App</Typography>
        <Typography variant="subtitle1">
          Revolutionizing Hospital Collaboration
        </Typography>
        <Button variant="contained" color="primary" component={Link} style={{marginTop: '16px'}} to="/login">
          Login
        </Button>
      </div>

      <Container style={{ marginTop: '20px' }}>
        <Typography variant="h4">About Our App</Typography>
        <Typography variant="body1">
          Our Hospital Collaboration App is designed to streamline the exchange
          of patient records securely and efficiently between healthcare
          professionals and institutions. With blockchain technology, we ensure
          the highest level of security and transparency.
        </Typography>
      </Container>

      <Container style={{ marginTop: '20px' }}>
        <Typography variant="h4">Key Features</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Secure Document Exchange</Typography>
                <Typography variant="body2">
                  Share medical records and documents with confidence, knowing
                  they are protected by blockchain security.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Access Control</Typography>
                <Typography variant="body2">
                  Grant permissions to doctors and healthcare professionals to
                  ensure only authorized individuals can access patient records.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">User-Friendly Interface</Typography>
                <Typography variant="body2">
                  Our intuitive interface makes it easy to manage patient
                  records and collaborate with other medical professionals.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <footer
        style={{
          marginTop: '20px',
          backgroundColor: '#333',
          color: 'white',
          padding: '10px 0',
          textAlign: 'center',
        }}
      >
        <Typography variant="body2">
          Powered by Partisia | All rights reserved
        </Typography>
      </footer>
    </div>
  );
};

export default LandingPage;
