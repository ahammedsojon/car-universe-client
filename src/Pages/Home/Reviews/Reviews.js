import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Review from '../Review/Review';
import { Container, CircularProgress, Typography } from '@mui/material';
import axios from 'axios';
import useAuth from '../../../hooks/useAuth';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const {token} = useAuth();
    useEffect(() => {
        axios.get('https://shrouded-tundra-85918.herokuapp.com/reviews', {
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
            .then(res => {
                console.log(res.data);
                setReviews(res.data);
            })
    }, [])
    return (
        <Box sx={{ flexGrow: 1, mb: 5 }}>
            <Container>
            <Typography variant="body2" style={{ fontSize: 35, fontWeight: 500, color: '#232628', letterSpacing: 1, marginBottom: 10 }}>
                   OUR CLIENT SAYS
                </Typography>
                <Box style={{ width: 200, height: 3, background: '#cd6621', margin: '0 auto' }}></Box>
                {
                    reviews.length === 0 ? <Box sx={{ display: 'flex', justifyContent: 'center'}}>
                        <CircularProgress />
                    </Box>
                        :
                        <Grid container spacing={2} sx={{}}>
                            {reviews.map(review => <Grid item xs={12} md={4} key={review._id} style={{ display: 'flex' }}>
                                <Review review={review}></Review>
                            </Grid>)}
                        </Grid>
                }

            </Container>
        </Box>
    );
};

export default Reviews;