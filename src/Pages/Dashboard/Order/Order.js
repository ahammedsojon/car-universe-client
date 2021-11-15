import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import useAuth from '../../../hooks/useAuth';

const Order = ({ order , handleDeleteOrder, updateable  }) => {
  const {orderId, _id, orderStatus, deliveryDate} = order;
  const [car, setCar] = useState({});
  const [status, setStatus] = useState(orderStatus);
  const {token} = useAuth();
  useEffect(() => {
    axios.get(`https://shrouded-tundra-85918.herokuapp.com/cars/car/?orderId=${orderId}`, {
      headers: {
          'authorization': `Bearer ${token}`
      }
  })
      .then(res => setCar(res.data));
  }, [])
  console.log('order_id', _id);

  const handleUpdateStatus = id => {
    console.log(id)
    axios.put(`https://shrouded-tundra-85918.herokuapp.com/orders/${id}`, {
      headers: {
          'authorization': `Bearer ${token}`
      }
  })
      .then(res => {
        if (res.data.modifiedCount) {
          setStatus('Shipped');
        }
      });
    }
    console.log(status, orderStatus)

  return (
    <>
      {
        order._id &&
        <Card sx={{ mt: 5 }}>
          <CardMedia
            style={{ objectFit: 'cover', height: 300, width: '100%' }}
            component="img"
            image={car?.img}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {car?.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {car?.description}
            </Typography>
            <Typography variant="h6" color="red">
             Delivery Date:  {deliveryDate}
            </Typography>
            <Box style={{ textAlign: 'right', marginTop: 10 }}>
              {updateable ? <>
                {
                  status === 'Pending' ?
                    <Button onClick={() => handleUpdateStatus(_id)} variant="contained" style={{ backgroundColor: '#ffc107', color: 'white' }}> {status}</Button>
                    :
                    <Button style={{ backgroundColor: '#28a745', color: 'white' }}> {status}</Button>
                }
              </>
                :
               <>
               {
                 orderStatus === 'Pending'? 
                  <Button variant="" style={{ backgroundColor: 'gray', color: 'white' }}>Pending</Button>
                  :
                  <Button variant="" style={{ backgroundColor: '#28a745', color: 'white' }}>Shipped</Button>
               }
               </>
              }


              <Button onClick={() => handleDeleteOrder(_id)} variant="contained" style={{ backgroundColor: '#dc3551', color: 'white', marginLeft: 10 }}> Cancel</Button>
            </Box>
          </CardContent>
        </Card>
      }
    </>
  );
};

export default Order;