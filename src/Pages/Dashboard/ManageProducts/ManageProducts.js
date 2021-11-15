import React, { useState, useEffect } from 'react';
import { Box, CircularProgress, Container, Typography } from '@mui/material';
import axios from 'axios';
import Order from '../Order/Order';
import useAuth from '../../../hooks/useAuth';
import Product from '../Product/Product';
const ManageProducts = () => {
    const { user, token } = useAuth();
    const [cars, setCars] = useState([]);
    useEffect(() => {
        axios.get(`https://shrouded-tundra-85918.herokuapp.com/cars`, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
            .then(res => {
                console.log(res);
                setCars(res.data);
            });
    }, [])

    const handleDeleteProduct = id =>{
        const proceed = window.confirm('Are you sure, you want to cancel this order?');
        if(proceed){
        axios.delete(`https://shrouded-tundra-85918.herokuapp.com/cars/${id}`, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
        .then(res => {
            console.log(res);
            if(res.data.deletedCount){
                    alert('Your order deleted successfully.');        
                }
                const filter = cars.filter(car => car._id !== id);
                setCars(filter);
            });
            }
    }
    return (
        <Box>
            <Container>
            <Typography variant="body2" style={{ fontSize: 35, fontWeight: 500, color: '#232628', letterSpacing: 1, marginBottom: 10 }}>
                    Total Products: {cars.length}
                </Typography>
                <Box style={{ width: 200, height: 3, background: '#cd6621', margin: '0 auto'}}></Box>
                {
                    cars.length === 0 ? <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <CircularProgress />
                    </Box>
                        :
                        cars.map(car => <Product key={car._id} car={car} handleDeleteProduct={handleDeleteProduct} ></Product>)
                }
            </Container>
        </Box>
    );
};

export default ManageProducts;