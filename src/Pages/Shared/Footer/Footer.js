import { Container, Grid, Typography, Box, Button } from '@mui/material';
import React from 'react';

const Footer = () => {
    const handleOnSubmit = e =>{
        e.preventDefault();
        alert('Youe subscribed done.');
        e.target.reset();
        console.log('submitting');
    }
    return (
        <Box style={{ backgroundColor: '#232628', padding: '40px 0', textAlign: 'left' }}>
            <Container>
                <Box>
                    <Grid container spacing={3} style={{padding: '30px 0', borderBottom: '1px solid #aaaaaa'}}>
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography variant="body2" style={{ color: 'white', marginBottom: '10px', fontSize: '18px', fontWeight: 'normal' }}><span style={{ color: '#6c98e1' }}>MOTORS</span> DEALERSHIP</Typography>
                            <Typography variant="body2" style={{ color: '#aaaaaa' }}>As the leading dealer in Jashore, we are confident that we will save you time and money. Motors is ultimate Automotive, Car Dealer Universe.</Typography>
                        </Grid>

                        <Grid item xs={12} sm={6} md={3}>
                            <Typography variant="body2" style={{ color: 'white', marginBottom: '10px', fontSize: '18px', fontWeight: 'normal' }}>PHOTO GALLERY</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={3}>
                                    <img style={{ width: '100%', height: 60, objectFit: 'cover' }} src="https://i.ibb.co/Khvjzsd/bently.jpg" alt="" />
                                </Grid>
                                <Grid item xs={3}>
                                    <img style={{ width: '100%', height: 60, objectFit: 'cover' }} src="https://i.ibb.co/qDKkgWK/chevrolet.jpg" alt="" />
                                </Grid>
                                <Grid item xs={3}>
                                    <img style={{ width: '100%', height: 60, objectFit: 'cover' }} src="https://i.ibb.co/WNr1dzX/nissan.jpg" alt="" />
                                </Grid>
                                <Grid item xs={3}>  <img style={{ width: '100%', height: 60, objectFit: 'cover' }} src="https://i.ibb.co/k47nmkP/acura.jpg" alt="" />
                                </Grid>
                            </Grid>

                        </Grid>

                        <Grid item xs={12} sm={6} md={3}>
                            <Typography variant="body2" style={{ color: 'white', marginBottom: '10px', fontSize: '18px', fontWeight: 'normal' }}>LATEST BLOG POSTS
                            </Typography>
                            <Typography variant="body2" style={{ color: '#aaaaaa' }}>The Tesla Model S isn’t the first truly autonomous car on the road...</Typography>
                            <Box style={{ display: 'flex', color: '#6c98d5', marginTop: 5, alignItems: 'center' }}>
                                <i className="far fa-comment-dots"></i>
                                <Typography variant="body2" sx={{ ml: 1 }}>NO COMMENTS</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography variant="body2" style={{ color: 'white', marginBottom: '10px', fontSize: '18px', fontWeight: 'normal' }}>SOCIAL NETWORK
                            </Typography>

                            <Grid container spacing={3} style={{ color: 'white', marginTop: 10}}>
                                <Grid item xs={3} style={{ padding: '2px', backgroundColor: '#919191', fontSize: 20, textAlign: 'center' }}>
                                    <i className="fab fa-facebook" style={{cursor: 'pointer'}}></i>
                                </Grid>
                                <Grid item xs={3} style={{ padding: '2px', backgroundColor: '#919191', fontSize: 20, textAlign: 'center' }}>
                                    <i className="fab fa-twitter" style={{cursor: 'pointer'}}></i>
                                </Grid>
                                <Grid item xs={3} style={{ padding: '2px', backgroundColor: '#919191', fontSize: 20, textAlign: 'center' }}>
                                    <i className="fab fa-linkedin" style={{cursor: 'pointer'}}></i>
                                </Grid>
                                <Grid item xs={3} style={{ padding: '2px', backgroundColor: '#919191', fontSize: 20, textAlign: 'center' }}>
                                    <i className="fab fa-youtube" style={{cursor: 'pointer'}}></i>
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                </Box>

                <Box>
                <Grid container spacing={3} style={{padding: '30px 0', borderBottom: '1px solid #aaaaaa'}}>
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography variant="body2" style={{ color: 'white', marginBottom: '10px', fontSize: '18px', fontWeight: 'normal' }}>SUBSCRIBE
                            </Typography>
                            <form onSubmit={handleOnSubmit} style={{ display: 'flex' }}>
                                <input type="email" style={{ backgroundColor: 'white', padding: 10, width: '805', outline: 'none' }} placeholder="Enter your email" required />
                                <Button type="submit" variant="contained"> <i className="fas fa-wifi"></i></Button>
                            </form>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography variant="body2" style={{ color: 'white', marginBottom: '10px', fontSize: '18px', fontWeight: 'normal' }}>SALES HOUR
                            </Typography>
                            <Box>
                            <Typography variant="body2" style={{ color: '#aaaaaa', fontWeight: 'bold' }}>Monday - Friday: <span style={{color: 'white', fontWeight: 'normal'}}>09:00AM - 09:00PM</span></Typography>
                            <Typography variant="body2" style={{ color: '#aaaaaa', fontWeight: 'bold' }}>Saturday: <span style={{color: 'white', fontWeight: 'normal'}}>09:00AM - 07:00PM</span></Typography>
                            <Typography variant="body2" style={{ color: '#aaaaaa', fontWeight: 'bold' }}>Sunday: <span style={{color: 'white', fontWeight: 'normal'}}>CLOSED</span></Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="body2" style={{ color: 'white', marginBottom: '10px', fontSize: '18px', fontWeight: 'normal' }}>SERVICE HOUR
                            </Typography>
                            <Box>
                            <Typography variant="body2" style={{ color: '#aaaaaa', fontWeight: 'bold' }}>Monday - Friday: <span style={{color: 'white', fontWeight: 'normal'}}>09:00AM - 09:00PM</span></Typography>
                            <Typography variant="body2" style={{ color: '#aaaaaa', fontWeight: 'bold' }}>Saturday: <span style={{color: 'white', fontWeight: 'normal'}}>09:00AM - 07:00PM</span></Typography>
                            <Typography variant="body2" style={{ color: '#aaaaaa', fontWeight: 'bold' }}>Sunday: <span style={{color: 'white', fontWeight: 'normal'}}>CLOSED</span></Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="body2" style={{ color: 'white', marginBottom: '10px', fontSize: '18px', fontWeight: 'normal' }}>PARTS HOUR
                            </Typography>
                            <Box>
                            <Typography variant="body2" style={{ color: '#aaaaaa', fontWeight: 'bold' }}>Monday - Friday: <span style={{color: 'white', fontWeight: 'normal'}}>09:00AM - 09:00PM</span></Typography>
                            <Typography variant="body2" style={{ color: '#aaaaaa', fontWeight: 'bold' }}>Saturday: <span style={{color: 'white', fontWeight: 'normal'}}>09:00AM - 07:00PM</span></Typography>
                            <Typography variant="body2" style={{ color: '#aaaaaa', fontWeight: 'bold' }}>Sunday: <span style={{color: 'white', fontWeight: 'normal'}}>CLOSED</span></Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                
                <Box style={{display: 'flex', marginTop: 30}}>
                    <Typography varaint="body2" style={{color: '#aaaaaa'}}>Copyright &copy; 2021. Car Universe. All Right Reserved</Typography>
                    <Box style={{color: '#233db1', marginLeft: 'auto', width: 150, display: 'flex', justifyContent: 'space-between'}}>
                    <i className="fab fa-facebook" style={{cursor: 'pointer'}}></i>
                    <i className="fab fa-twitter" style={{cursor: 'pointer'}}></i>
                    <i className="fab fa-linkedin" style={{cursor: 'pointer'}}></i>
                    </Box>
                </Box>
            </Container >
        </Box >
    );
};

export default Footer;