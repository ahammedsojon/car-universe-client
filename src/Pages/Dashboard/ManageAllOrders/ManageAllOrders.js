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
        axios.get(`https://shrouded-tundra-85918.herokuapp.com/orders`, {
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
        axios.delete(`https://shrouded-tundra-85918.herokuapp.com/orders/${id}`, {
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
            <Typography variant="body2" style={{ fontSize: 35, fontWeight: 500, color: '#232628', letterSpacing: 1, marginBottom: 10 }}>
                    Total Orders: {orders.length}
                </Typography>
                <Box style={{ width: 200, height: 3, background: '#cd6621', margin: '0 auto'}}></Box>
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