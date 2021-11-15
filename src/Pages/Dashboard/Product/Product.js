import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';

const Product = ({ car, handleDeleteProduct }) => {
const {_id, name , description, img, price} = car;
  return (
    <>
        <Card sx={{ mt: 5 }}>
          <CardMedia
            style={{ objectFit: 'cover', height: 300, width: '100%' }}
            component="img"
            image={img}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
               <Typography variant="h6" color="">
             Price: ${price}
            </Typography>
            <Box style={{ textAlign: 'right', marginTop: 10 }}>
              <Button onClick={() => handleDeleteProduct(_id)} variant="contained" style={{ backgroundColor: '#dc3551', color: 'white', marginLeft: 10 }}> Delete</Button>
            </Box>
          </CardContent>
        </Card>
    </>
  );
};

export default Product;