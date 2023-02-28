import React from 'react';
import { useGetProductsQuery } from '../../../Redux/Features/products/productApi';
import Sidebar from '../../Sideber';

const Home = () => {
    const { data: products, isLoading, isSuccess, isError } = useGetProductsQuery();

    console.log(products?.result);

    return (
        <div>
            <Sidebar />

        </div>
    );
};

export default Home;