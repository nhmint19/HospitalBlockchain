import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Container, Button, Paper } from '@mui/material';
import SearchOffIcon from '@mui/icons-material/SearchOff';

const NotFound: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <Paper elevation={3} className="flex flex-col items-center p-5 mt-10">
        <SearchOffIcon className="text-error" fontSize="large" />
        <Typography variant="h5" className="mt-20 ">
          404 - Page Not Found
        </Typography>
        <Typography variant="body1" className="mt-10">
          The page you are looking for does not exist. Please return to the{' '}
          <Link to="/" className="link">
            homepage
          </Link>
          .
        </Typography>
        <Button variant="contained" color="primary" component={Link} to="/" className="mt-20">
          Go to Homepage
        </Button>
      </Paper>
    </Container>
  );
};

export default NotFound;
