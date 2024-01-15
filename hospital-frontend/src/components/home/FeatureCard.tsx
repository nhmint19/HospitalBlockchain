import React from 'react';
import { Button, Container, Typography, Grid, Card, CardContent, CardActions } from '@mui/material';

type Props = {
  title: string;
  desc: string;
};

const FeatureCard = (props: Props) => {
  return (
    <Card className="!bg-primaryLight">
      <CardContent className="h-[120px]">
        <Typography variant="h6" mb={1}>
          {props.title}
        </Typography>
        <Typography variant="body2">{props.desc}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="secondary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default FeatureCard;
