import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const Car = ({car}) => {
    const {_id, name, description, img, price, mileage, transmission, mpg} = car;
    return (
        <Card style={{boxShadow: 'none'}}>
      <CardMedia
        component="img"
        height="180"
        width="100%"
        style={{objectFit: 'cover', objectPosition: 'center center'}}
        image={img}
        alt="green iguana"
      />
      <CardContent>
        <Box sx={{display: 'flex', minHeight: 90, alignItems: 'baseline'}}>
        <Typography gutterBottom variant="h6">
          {name}
        </Typography>
        <Box sx={{backgroundColor: '#6c98e1', py:2, px:3, ml: 'auto', color: 'white', borderRadius: '50px 0 0 0', height: 20 }}>
          <Typography variant="h6">
            ${price}
          </Typography>
        </Box>
        </Box>
        <Typography variant="body1" color="text.secondary" sx={{borderBottom: 1, borderColor: 'GrayText.secondary', pb:1, mb:2}}>
          {description.slice(0,80)}...
        </Typography>
      <Box sx={{display: 'flex', justifyContent: 'space-between', mb: 2}}>
        <Box sx={{display: 'flex'}} >
          <Typography variant="body1" color="text.secondary" sx={{mr: 1, fontWeight: 'bold'}}>
      {mileage}
          </Typography>
             <Typography variant="body1" color="text.secondary" sx={{fontWeight: 'bold'}}>
             <i className="fas fa-road"></i>
          </Typography>
        </Box>
        <Box sx={{display: 'flex'}} >
          <Typography variant="body1" color="text.secondary" sx={{mr: 1, fontWeight: 'bold'}}>
      {mpg}
          </Typography>
             <Typography variant="body1" color="text.secondary" sx={{fontWeight: 'bold'}}>
             <i className="fas fa-digital-tachograph"></i>
          </Typography>
        </Box>
        <Box sx={{display: 'flex'}} >
          <Typography variant="body1" color="text.secondary" sx={{mr: 1, fontWeight: 'bold'}}>
      {transmission}
          </Typography>
             <Typography variant="body1" color="text.secondary" sx={{fontWeight: 'bold'}}>
             <i className="fab fa-searchengin"></i>
          </Typography>
        </Box>
        </Box>
      <Link style={{textDecoration: 'none'}} to={`/purchase/${_id}`}>
      <Button variant="contained">Purchase</Button>
      </Link>
      </CardContent>
    </Card>
    );
};

export default Car;