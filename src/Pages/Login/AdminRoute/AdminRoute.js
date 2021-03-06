import { Box, CircularProgress } from '@mui/material';
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const AdminRoute = ({children, ...rest}) => {
    const {user, admin} = useAuth();
    if(!admin){
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <CircularProgress />
          </Box>
        )
    }
    return (
        <Route
      {...rest}
      render={({ location }) =>
       user?.email && admin ? (
          children
        ) : (
          <Redirect
            to={{
            pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default AdminRoute;