import { Button, Typography, Card, CardContent, CardActions } from '@mui/material';

type Props = {
  title: string;
  desc: string;
  learnMore: () => void;
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
        <Button size="small" color="secondary" onClick={props.learnMore}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default FeatureCard;
