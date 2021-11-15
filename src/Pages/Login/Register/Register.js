import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import registerImage from '../../../images/banner.png';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const {createNewUser} = useAuth();
    const history = useHistory();
    const [user, setUser] = useState({});
    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newUser = {...user};
        newUser[field] = value;
        setUser(newUser);
    }
    const handleOnSubmit = e =>{
        e.preventDefault();
        createNewUser(user.email, user.password, user.name,user.image, history)
        console.log(user);
    }

    return (
        <Container>
            <Box sx={{ flexGrow: 1 }} style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Grid container spacing={2} style={{ display: 'flex', alignItems: 'center' }}>
                    <Grid item xs={12} md={6} sx={{ textAlign: 'left', order: 2 }}>
                        <Typography variant="h5">Register</Typography>
                        <form onSubmit={handleOnSubmit} style={{ width: '75%' }}>
                            <TextField
                            onBlur={handleOnBlur}
                                id="standard-basic"
                                label="Your Name"
                                name="name"
                                fullWidth
                                variant="standard"
                            />
                            <TextField
                             onBlur={handleOnBlur}
                                id="standard-basic"
                                label="Your Email"
                                name="email"
                                type="email"
                                fullWidth
                                variant="standard"
                            />
                            <TextField
                             onBlur={handleOnBlur}
                                id="standard-basic"
                                label="Password"
                                name="password"
                                type="password"
                                fullWidth
                                variant="standard"
                            />
                            <TextField
                             onBlur={handleOnBlur}
                                id="standard-basic"
                                label="Confirm Password"
                                name="password2"
                                type="password"
                                fullWidth
                                variant="standard"
                            />
                            <TextField
                             onBlur={handleOnBlur}
                                id="standard-basic"
                                label="Image URL Inclueds https://"
                                name="image"
                                fullWidth
                                variant="standard"
                            />
                            <Button 
                            type="submit"
                             variant="contained"
                             fullWidth
                              sx={{ mt: 2 }}>Log in</Button>
                        </form>
                        <Link to="/login" style={{ textDecoration: 'none' }}>
                            <Button variant="inherit" sx={{ mt: 2 }}>Already have an account? Please Sign in</Button>
                        </Link>
                    </Grid>
                    <Grid item xs={12} md={6} style={{order: 1}}>
                        <img style={{maxWidth: '100%'}} src={registerImage} alt="" />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Register;