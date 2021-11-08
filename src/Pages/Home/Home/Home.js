import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <AppointmentBanner></AppointmentBanner>
        </div>
    );
};

export default Home;