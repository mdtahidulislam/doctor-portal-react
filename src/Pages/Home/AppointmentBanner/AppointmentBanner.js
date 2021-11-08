import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';
import doctor from '../../../images/doctor.png';
import appointbg from '../../../images/appointment-bg.png'

const appointmentbg = {
    background: `url(${appointbg})`,
    backgroundColor: 'rgba(55, 59, 87, .99)',
    backgroundBlendMode: 'darken',
    backgroundPosition: 'center',
    marginTop: '175px'
}

const AppointmentBanner = () => {
    return (
        <Box sx={{ flexGrow: 1 }} style={appointmentbg}>
            <Grid container spacing={0} sx={{ alignItems: 'center' }}>
                <Grid xs={12} md={5}>
                    <img
                        src={doctor}
                        style={{
                            width: '100%',
                            height: 'auto',
                            marginTop: '-175px'
                        }}
                        alt=""
                    />
                </Grid>
                <Grid xs={12} md={7} sx={{ textAlign: 'left' }}>
                    <Typography variant='h6' sx={{ mb: 5 }} style={{ color: 'white' }}>
                        Appointment
                    </Typography>
                    <Typography variant='h4' sx={{ mb: 2 }} style={{ color: 'white', maxWidth: '400px' }}>
                        Make an appointment today
                    </Typography>
                    <Typography sx={{ mb: 2 }} style={{ color: 'white', maxWidth: '550px' }}>
                        It is a long established fact that a reader will be distracted by the readable content of a pge when lookingat its
                    </Typography>
                    <Typography>
                        <Button variant="contained">Learn More</Button>
                    </Typography>
                </Grid>
            </Grid>
        </Box >
    );
};

export default AppointmentBanner;