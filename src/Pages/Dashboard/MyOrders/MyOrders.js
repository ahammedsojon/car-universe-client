import React, { useState, useEffect } from 'react';
import { Box, CircularProgress, Container, Typography } from '@mui/material';
import axios from 'axios';
import Order from '../Order/Order';
import useAuth from '../../../hooks/useAuth';
const MyOrders = () => {
    const { user, token } = useAuth();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:5000/orders/${user?.email}`, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
            .then(res => {
                console.log(res);
                setOrders(res.data);
            });
    }, [user?.email])

    const handleDeleteOrder = id =>{
        const proceed = window.confirm('Are you sure, you want to cancel this order?');
        if(proceed){
        axios.delete(`http://localhost:5000/orders/${id}`, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
        .then(res => {
            console.log(res);
            if(res.data.deletedCount){
                    alert('Your order deleted successfully.');        
                }
                const filter = orders.filter(order => order._id !== id);
                setOrders(filter);
            });
            }
    }
    return (
        <Box>
            <Container>
                <Typography variant="h4">You have ordered:  {orders.length}
                </Typography>
                {
                    orders.length === 0 ? <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <CircularProgress />
                    </Box>
                        :
                        orders.map(order => <Order key={order._id} order={order} handleDeleteOrder={handleDeleteOrder} ></Order>)
                }
            </Container>
        </Box>
    );
};

export default MyOrders;