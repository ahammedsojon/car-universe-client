import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button, Container, Grid } from '@mui/material';

const ChooseUs = () => {
    return (
        <Box style={{ backgroundColor: '#f0f2f5', padding: '60px 0' }}>
            <Container>
                <Typography variant="body2" style={{ fontSize: 35, fontWeight: 500, color: '#232628', letterSpacing: 1, marginBottom: 10 }}>
                    WHY CHOOSE US
                </Typography>
                <Box style={{ width: 200, height: 3, background: '#cd6621', margin: '0 auto'}}></Box>
                <Grid container spacing={3} style={{ padding: '50px 0' }}>
                    <Grid item sx={12} md={3}>
                        <Box style={{ display: 'flex'}}>
                            <Box style={{ fontSize: 60, fontWeight: 'bold', color: '#cd6621' }}>
                                <i className="fas fa-coins"></i>
                            </Box>
                            <Box style={{ textAlign: 'left', marginLeft: 20 }}>
                                <Typography variant="body2" style={{ fontSize: 18, fontWeight: 'bold' }}>
                                    FINANCING MADE EASY
                                </Typography>
                                <Box style={{ margin: '20px 0' }}></Box>
                                <Typography variant="body2" color="text.secondary">
                                    Our stress-free finance department that can find financial solutions to save you money.
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item sx={12} md={3}>
                        <Box style={{ display: 'flex' }}>
                            <Box style={{ fontSize: 60, fontWeight: 'bold', color: '#cd6621' }}>
                                <i className="fab fa-servicestack"></i>
                            </Box>
                            <Box style={{ textAlign: 'left', marginLeft: 20 }}>
                                <Typography variant="body2" style={{ fontSize: 18, fontWeight: 'bold' }}>
                                    WIDE RANGE OF BRANDS
                                </Typography>
                                <Box style={{ margin: '20px 0' }}></Box>
                                <Typography variant="body2" color="text.secondary">
                                    With a robust selection of popular vehicles on hand, as well as leading vehicles from BMW and Ford.
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item sx={12} md={3}>
                        <Box style={{ display: 'flex' }}>
                            <Box style={{ fontSize: 60, fontWeight: 'bold', color: '#cd6621' }}>
                                <i className="far fa-comments"></i>
                            </Box>
                            <Box style={{ textAlign: 'left', marginLeft: 20 }}>
                                <Typography variant="body2" style={{ fontSize: 18, fontWeight: 'bold' }}>
                                    TRUSTED BY THOUSANDS
                                </Typography>
                                <Box style={{ margin: '20px 0' }}></Box>
                                <Typography variant="body2" color="text.secondary">
                                    10 new offers every day. 350 offers on site, trusted by a community of thousands of users.
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item sx={12} md={3}>
                        <Box style={{ display: 'flex' }}>
                            <Box style={{ fontSize: 60, fontWeight: 'bold', color: '#cd6621' }}>
                                <i className="fas fa-taxi"></i>
                            </Box>
                            <Box style={{ textAlign: 'left', marginLeft: 20 }}>
                                <Typography variant="body2" style={{ fontSize: 18, fontWeight: 'bold' }}>

                                    CAR SERVICE & MAINTENANCE
                                </Typography>
                                <Box style={{ margin: '20px 0' }}></Box>
                                <Typography variant="body2" color="text.secondary">
                                    Our service department maintain your car to stay safe on the road for many more years.
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                <Button variant="contained"><i className="fas fa-angle-double-right" style={{ marginRight: 5 }}></i> learn more</Button>
            </Container>
        </Box>
    );
};

export default ChooseUs;