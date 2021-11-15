import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import useAuth from '../../../hooks/useAuth';


const Review = ({review}) => {
  console.log(review);
  const {user} = useAuth();
  const {name, email, img, feedback, rating} = review;
    return (
          <Card sx={{ paddingTop: 5}} style={{width: '100%', boxShadow: 'none'}}>
      <CardMedia
      style={{height: 80, width: 80, borderRadius: '50%', margin: '0 auto 8px',}}
        component="img"
        image={img ? img : 'https://cdn-icons.flaticon.com/png/512/2179/premium/2179272.png?token=exp=1636884497~hmac=591c307982423a80e5c954fcde3564a8'}
        alt="user's photo"
      />
 <Rating name="read-only" value={Number(rating)} readOnly />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {feedback}
        </Typography>
        <Typography gutterBottom variant="h6" style={{marginTop: 10, marginBottom: 0}}  component="div">
          {name}
        </Typography>
           <Typography gutterBottom variant="body1" component="div">
          {email}
        </Typography>
      </CardContent>
    </Card>
    );
};

export default Review;