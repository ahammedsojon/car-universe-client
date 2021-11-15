import { Typography } from '@mui/material';
import React from 'react';
import useAuth from '../../../hooks/useAuth';

const DashboardHome = () => {
    const {user, admin} = useAuth();
    const bgStyle = {
        background: `url('https://i.ibb.co/k47nmkP/acura.jpg')`,
        backgroundColor: `rgba(0, 0, 0, 1)`,
        backgroundBlendMode: 'darken luminosity',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        padding: '50px 0',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
    return (
        <div style={bgStyle}>
            <div>
            <img style={{maxWidth: '100%', width: 200, height: 200, borderRadius: '50%', objectFit: 'cover'}} src={user?.photoURL} alt="" />
            <Typography variant="h4" style={{color: 'white', fontWeight: 'bold'}}>Hello, {user?.displayName}. Welcome back to dashboard!</Typography>
            </div>
        </div>
    );
};

export default DashboardHome;