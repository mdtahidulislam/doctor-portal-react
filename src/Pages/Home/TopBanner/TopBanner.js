import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import chair from '../../../images/chair.png';

const TopBanner = () => {
    return (
        <Box sx={{ flexGrow: 1, alignItems: 'center', display: 'flex' }} style={{ height: '700px' }}>
            <Container>
                <Grid container spacing={0}>
                    <Grid xs={12} md={5} sx={{ textAlign: 'left' }}>
                        <Typography variant='h2' sx={{ mb: 2 }} style={{ maxWidth: '400px' }}>
                            Your New Smile Starts Here
                        </Typography>
                        <Typography sx={{ mb: 2 }} style={{ maxWidth: '550px' }}>
                            It is a long established fact that a reader will be distracted by the readable content of a pge when lookingat its
                        </Typography>
                        <Typography>
                            <Button variant="contained">Learn More</Button>
                        </Typography>
                    </Grid>
                    <Grid xs={12} md={7}>
                        <img
                            src={chair}
                            style={{
                                width: '100%',
                                height: 'auto'
                            }}
                            alt=""
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box >
    );
};

export default TopBanner;