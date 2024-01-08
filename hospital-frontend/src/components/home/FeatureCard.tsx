import React from 'react';
import { Button, Container, Typography, Grid, Card, CardContent, CardActions } from '@mui/material';

type Props = {
  title: string;
  desc: string;
};

const FeatureCard = (props: Props) => {
  return (
    <Card>
      <CardContent className="h-[120px]">
        <Typography variant="h6">{props.title}</Typography>
        <Typography variant="body2">{props.desc}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default FeatureCard;
