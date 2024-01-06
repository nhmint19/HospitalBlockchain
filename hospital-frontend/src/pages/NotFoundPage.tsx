import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Container, Button, Paper } from '@mui/material';
import SearchOffIcon from '@mui/icons-material/SearchOff';

import styles from '../styles'; // Import the styles from a separate file

const NotFound: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={styles.container}>
        <SearchOffIcon sx={styles.icon} fontSize="large" />
        <Typography variant="h5" sx={styles.title}>
          404 - Page Not Found
        </Typography>
        <Typography variant="body1" sx={styles.text}>
          The page you are looking for does not exist. Please return to the{' '}
          <Link to="/" style={styles.link}>
            homepage
          </Link>
          .
        </Typography>
        <Button variant="contained" color="primary" component={Link} to="/" sx={styles.button}>
          Go to Homepage
        </Button>
      </Paper>
    </Container>
  );
};

export default NotFound;
