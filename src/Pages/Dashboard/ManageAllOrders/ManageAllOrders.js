import React, { useState, useEffect } from 'react';
import { Box, CircularProgress, Container, Typography } from '@mui/material';
import axios from 'axios';
import Order from '../Order/Order';
import useAuth from '../../../hooks/useAuth';
const ManageAllOrders = () => {
    const { user, token } = useAuth();
    const [orders, setOrders] = useState([]);
    const [updateable, setUpdateable] = useState(true);
    useEffect(() => {
        axios.get(`http://localhost:5000/orders`, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
            .then(res => {
                console.log(res);
                setOrders(res.data);
            });
    }, [])

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
                <Typography variant="h4">Total Orders:  {orders.length}
                </Typography>
                {
                    orders.length === 0 ? <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <CircularProgress />
                    </Box>
                        :
                        orders.map(order => <Order key={order._id} order={order} handleDeleteOrder={handleDeleteOrder} updateable={updateable} setUpdateable={setUpdateable}></Order>)
                }
            </Container>
        </Box>
    );
};

export default ManageAllOrders;