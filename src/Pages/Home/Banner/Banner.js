import React from 'react';
import Box from '@mui/material/Grid';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import banner from '../../../images/banner.png';
import { Container } from '@mui/material';
import { Link } from 'react-router-dom';

const Banner = () => {
const bannerBg = {
    backgroundImage: `url('https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80')`,
    backgroundRepeat: `no-repeat`,
    backgroundSize: 'cover',
    minHeight: 500,
}
    return (
       <Box>
           <Container>
           <Grid container sx={{display: 'flex', alignItems: 'center',}}>
               <Grid item xs={12} md={7}>
                   <img style={{maxWidth: '100%'}} src={banner} alt="" />
               </Grid>
               <Grid item xs={12} md={5} sx={{textAlign: 'left'}}>
                   <Typography variant="h4" sx={{color: '', mb: 2, fontWeight: 'bold'}}>Get Brand New Cars</Typography>
                   <Typography variant="body2" color="text.secondary" sx={{mb: 2}}>As the leading dealer in Jashore, we are confident that we will save you time and money. Motors is ultimate Automotive, Car Dealer Universe. As the leading dealer in Jashore, we are confident that we will save you time and money. Motors is ultimate Automotive, Car Dealer Universe.</Typography>
                   <Link to="/explore" style={{textDecoration: 'none'}}>
                   <Button variant="contained">Explore</Button>
                   </Link>
               </Grid>
           </Grid>
           </Container>
       </Box>
    );
};

export default Banner;