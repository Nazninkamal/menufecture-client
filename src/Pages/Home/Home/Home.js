import React from 'react';
import { useGetProductsQuery } from '../../../Redux/Features/products/productApi';

const Home = () => {
    const { data: products, isLoading, isSuccess, isError } = useGetProductsQuery();

    console.log(products?.result);

    return (
        <div>
            <h1 className="text-3xl font-bold underline text-green-400 flex justify-center items-center h-screen">
                Hello world!
            </h1>

        </div>
    );
};

export default Home;