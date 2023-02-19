import React from 'react';
import { Typography } from '@mui/material';
import Navbar from '../../Components/Navber/Navber';
import { useGetProductsQuery } from '../../Redux/Features/products/productApi';
const Home = () => {
    const { data: products, isLoading, isSuccess, isError } = useGetProductsQuery();

    console.log(products?.result);

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