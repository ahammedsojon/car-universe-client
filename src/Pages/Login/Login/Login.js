import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import loginImage from '../../../images/banner.png';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const {logInUser, admin} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const [user, setUser] = useState({})
    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newUser = {...user}
        newUser[field] = value;
        setUser(newUser);
    }
    const handleOnSubmit = e =>{
        e.preventDefault();
        logInUser(user.email, user.password, location, history);
        console.log(user);
    }
    return (
        <Container>
            <Box sx={{ flexGrow: 1 }} style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Grid container spacing={2} style={{ display: 'flex', alignItems: 'center' }}>
                    <Grid item xs={12} md={6}>
                        <img style={{maxWidth: '100%'}} src={loginImage} alt="" />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ textAlign: 'left' }}>
                        <Typography variant="h5">Log in</Typography>
                        <form onSubmit={handleOnSubmit} style={{ width: '75%' }}>
                            <TextField
                            onBlur={handleOnBlur}
                                label="Email"
                                name="email"
                                fullWidth
                                variant="standard"
                                required
                            />
                            <TextField
                            onBlur={handleOnBlur}
                                label="Password"
                                name="password"
                                type="password"
                                fullWidth
                                variant="standard"
                                required
                            />
                            <Button
                             type="submit"
                              variant="contained"
                              fullWidth
                               sx={{ mt: 2 }}>Log in</Button>
                        </form>
                        <Link to="/register" style={{ textDecoration: 'none' }}>
                            <Button variant="inherit" sx={{ mt: 2 }}>New user? Please Register</Button>
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Login;