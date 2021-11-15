import { Typography, Box, TextField, Button } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const [user, setUser] = useState({})
    const {token} = useAuth();
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        user[field] = value;
    }
    const handleOnSubmit = e => {
        e.preventDefault();
        const userEmail = user;
        axios.put('http://localhost:5000/users', {
            userEmail
        }, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
            .then(res => {
                if(res.data.modifiedCount && res.data.matchedCount){
                    alert('Made an admin successfully');
                    e.target.reset();
                }else if(!res.data.modifiedCount && res.data.matchedCount){
                    alert('This user already an admin');
                    e.target.reset();
                }else if(!res.data.modifiedCount && !res.data.matchedCount){
                    alert('User not exists');
                    e.target.reset();
                }
            })
    }

    return (
        <Box>
            <Typography variant="h4">Make an Admin</Typography>
            <form style={{ width: '40%', margin: '0 auto' }} onSubmit={handleOnSubmit}>
                <TextField
                    onBlur={handleOnBlur}
                    id="standard-basic"
                    label="Email"
                    name="email"
                    type="email"
                    fullWidth
                    variant="standard"
                />
                <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{ mt: 2 }}>Add</Button>
            </form>
        </Box>
    );
};

export default MakeAdmin;