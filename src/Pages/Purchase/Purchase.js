import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import { Button, Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../hooks/useAuth';


const Purchase = () => {
    let { carId } = useParams();
    const [car, setCar] = useState({});
    const {user, token} = useAuth();
    const [booking, setBooking] = useState({name: user?.displayName, email: user?.email, address: '', phone: '', orderDate: new Date().toLocaleDateString(), deliveryDate: ''});
    useEffect(() => {
        axios.get(`http://localhost:5000/cars/${carId}`, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
            .then(res => setCar(res.data))
    }, [])

    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newBooking = {...booking};
        newBooking[field] = value;
        setBooking(newBooking);
    }

    const handleOnSubmit = e =>{
        e.preventDefault();
        const bookingOrder = {...booking, orderStatus: 'Pending', orderId: carId };
        console.log(bookingOrder)
        axios.post(`http://localhost:5000/orders`, {
            bookingOrder
        }, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
        .then(res => {
            if(res.data.insertedId){
                alert('Your order has been placed successfully.');
                e.target.reset();
            }
        });
    }
    return (
        <>
           <Box>
                <img style={{ width: '100%', height: '426px', objectFit: 'cover'}} src={car?.img} alt="" />
           </Box>
        <Container>
            <Box sx={{ flexGrow: 1, textAlign: 'left' }}>
                <Grid container spacing={2} style={{ display: 'flex', alignItems: 'center', margin: '20px 0' }}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h3">
                            {car?.name}
                        </Typography>
                        <Typography variant="h5" style={{ fontWeight: 'bold', margin: '15px 0' }}>
                            ${car?.price}
                        </Typography>
                        <Typography variant="body2" style={{marginBottom: '15px'}} color="text.secondary">
                            {car?.description}
                        </Typography>

                        <TableContainer component={Paper}>
      <Table sx={{ width: '100%', textAlign: 'left' }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Mileage</TableCell>
            <TableCell align="left">Transmission</TableCell>
            <TableCell align="left">CITY MPG / HWY MPG</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">{car?.mileage}</TableCell>
              <TableCell align="left">{car?.transmission}</TableCell>
              <TableCell align="left">{car?.mpg}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <form onSubmit={handleOnSubmit}>
                            <TextField
                                sx={{ mb: 1 }}
                                label="Name"
                                variant="outlined"
                                defaultValue={user?.displayName}
                                disabled
                                fullWidth />
                            <TextField
                                sx={{ mb: 1 }}
                                label="Email"
                                variant="outlined"
                                defaultValue={user?.email}
                                type="email"
                                disabled
                                fullWidth />
                            <TextField
                                sx={{ mb: 1 }}
                                onBlur={handleOnBlur}
                                label="Address"
                                name="address"
                                variant="outlined"
                                fullWidth />
                            <TextField
                                sx={{ mb: 1 }}
                                onBlur={handleOnBlur}
                                label="Phone"
                                name="phone"
                                variant="outlined"
                                type="number"
                                fullWidth />
                            <TextField
                                sx={{ mb: 1 }}
                                onBlur={handleOnBlur}
                                label="Delivery Date"
                                name="deliveryDate"
                                variant="outlined"
                                fullWidth />
                            <Button style={{width: '100%'}} type="submit" variant="contained">Place Order</Button>
                        </form>
                    </Grid>
                </Grid>
            </Box>
        </Container>
        </>
    );
};

export default Purchase;