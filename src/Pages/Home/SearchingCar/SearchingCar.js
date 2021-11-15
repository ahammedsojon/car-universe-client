import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Container, Grid } from '@mui/material';
const SearchingCar = () => {
    const bgStyle = {
        background: `url('https://i.ibb.co/k47nmkP/acura.jpg')`,
        backgroundColor: `rgba(0, 0, 0, 1)`,
        backgroundBlendMode: 'darken luminosity',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        padding: '50px 0'
    }
    return (
        <Box style={bgStyle}>
           <Container>
           <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                 <Box style={{backgroundColor: '#f9b537', padding: '40px 0 40px 60px', display: 'flex', alignItems: 'center', cursor: 'pointer'}}>
                        <Box style={{fontSize: 60, fontWeight: 'bold', }}>
                        <i className="fab fa-searchengin"></i>
                        </Box>
                        <Box style={{textAlign: 'left', marginLeft: 20}}>
                            <Typography variant="body2" style={{ fontSize: 28, fontWeight: 'bold', color: '#232628',letterSpacing: 1 }}>
                                Are you looking for a car?
                            </Typography>
                            <Box style={{margin: '20px 0'}}></Box>
                            <Typography variant="body2" style={{ color: 'white', width: '65%'}}>
                                Our cars are delivered fully-registered with all requirements completed. We’ll deliver your car wherever you are.
                            </Typography>
                        </Box>
                    </Box>
                </Grid>

                      <Grid item xs={12} md={6}>
                 <Box style={{backgroundColor: '#fa4a4a', padding: '40px 0 40px 60px', display: 'flex', alignItems: 'center', cursor: 'pointer'}}>
                        <Box style={{fontSize: 60, fontWeight: 'bold', color: '#232628'}}>
                        <i className="fas fa-search-dollar"></i>
                        </Box>
                        <Box style={{textAlign: 'left', marginLeft: 20}}>
                            <Typography variant="body2" style={{ fontSize: 28, fontWeight: 'bold', color: '#232628',letterSpacing: 1 }}>
                                Do you want to sell a car?
                            </Typography>
                            <Box style={{margin: '20px 0'}}></Box>
                            <Typography variant="body2" style={{ color: 'white', width: '75%'}}>
                            What’s your car worth? Receive the absolute best value for your trade-in vehicle. We even handle all paperwork. Schedule your appointment today!
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
           </Container>
        </Box>
    );
};

export default SearchingCar;