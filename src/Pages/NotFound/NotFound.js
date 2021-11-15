
import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Button } from '@mui/material';
import {Link} from 'react-router-dom'
const NotFound = () => {
    return (
        <Container style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box style={{width: 500, margin: '0 auto'}}>
                <img style={{ maxWidth: '100%' }} src="https://i.ibb.co/YRY23nR/404.jpg" alt="" />
            </Box>
            <Box>
                <Link style={{textDecoration: 'none'}} to="/">
                    <Button variant="contained">Go home</Button>
                </Link>
            </Box>
        </Container>
    );
};

export default NotFound;