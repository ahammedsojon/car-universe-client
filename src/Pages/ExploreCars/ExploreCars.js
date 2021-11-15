import React from 'react';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Car from '../Shared/Car/Car';
import useCars from '../../hooks/useCars';
import Navigation from '../Shared/Navigation/Navigation';
import Footer from '../Shared/Footer/Footer';

const ExploreCars = () => {
    const [cars] = useCars();
    return (
     <>
     <Navigation></Navigation>
     <Container sx={{my:5}}>
     <Typography variant="body2" style={{ fontSize: 35, fontWeight: 500, color: '#232628', letterSpacing: 1, marginBottom: 10 }}>
                   EXPLORE ALL CARS
                </Typography>
                <Box style={{ width: 200, height: 3, background: '#cd6621', margin: '0 auto' }}></Box>
         {
            cars.length === 0 ?  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <CircularProgress />
          </Box> :
                <Grid container spacing={2} sx={{textAlign: 'left', pt: 5}}>
                    {
                        cars.map(car =>
                            <Grid item xs={12} sm={6} md={4} key={car._id}>
                                <Car car={car}></Car>
                            </Grid>
                        )
                    }
                </Grid>
        }
        </Container>
        <Footer></Footer>
     </>
    );
};

export default ExploreCars;