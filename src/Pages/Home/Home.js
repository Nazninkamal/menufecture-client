import React from 'react';
import { Typography } from '@mui/material';
import Navbar from '../../Components/Navber/Navber';
const Home = () => {
    return (
        <div>
            <Navbar />
            <Typography variant='h1'>
                home
            </Typography>
        </div>
    );
};

export default Home;