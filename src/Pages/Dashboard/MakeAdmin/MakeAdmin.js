import { Typography, Box, TextField, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/system';
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
        axios.put('https://shrouded-tundra-85918.herokuapp.com/users', {
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

    const theme = useTheme();
    const useStyles = makeStyles({
        textField: {
            [theme.breakpoints.down('sm')]: {
                width: '80%',
                margin: '0 auto'
            },
             [theme.breakpoints.up('sm')]: {
                width: '50%',
                margin: '0 auto'
            },
        }
    })

    const {textField} = useStyles();

    return (
        <Box>
             <Typography variant="body2" style={{ fontSize: 35, fontWeight: 500, color: '#232628', letterSpacing: 1, marginBottom: 10 }}>
                    Make an Admin
                </Typography>
                <Box style={{ width: 200, height: 3, background: '#cd6621', margin: '0 auto'}}></Box>
                <Box style={{marginTop: 20}}></Box>
            <form className={textField} onSubmit={handleOnSubmit}>
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