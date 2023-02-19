import React from 'react';
import { Box, Typography } from '@mui/material';
// import Navbar from '../../../Components/Navber/Navber';
import { useGetProductsQuery } from '../../../Redux/Features/products/productApi';
import Banner from '../Banner/Banner';
import HowToOrder from '../HowToOrder/HowToOrder';
import Services from '../Services/Services';
import Application from '../Applications/Application';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
// import { Navigation } from '@mui/icons-material';
const Home = () => {
    const { data: products, isLoading, isSuccess, isError } = useGetProductsQuery();

    console.log(products?.result);

    return (
        <Box>
           <Navigation /> 
            <Banner/>
            <Services/>
            <Application/>
            <HowToOrder/>
            <Footer/>
            
        </Box>
    );
};

export default Home;