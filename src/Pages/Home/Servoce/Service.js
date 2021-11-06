import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardMedia, Grid } from '@mui/material';

const Service = (props) => {
    const {name, description, img} = props.service;
    return (
        <Grid item xs={4} sm={4} md={4}>
        <Card sx={{ minWidth: 275 }}>
            <CardMedia
        component="img"
        style={{width: 'auto', margin: '0 auto'}}
        image={img}
        alt={name}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2">
          {description}
        </Typography>
      </CardContent>
    </Card>
    </Grid>
    );
};

export default Service;