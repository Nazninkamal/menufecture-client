import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { downloadPDF } from '../../../../Redux/Features/quotes/quotesSlice';



const OrderReviewQuote = () => {

    
    const { id } = useParams()
    const { isLoading, isError, error } = useSelector((state) => state.quote);
    const dispatch = useDispatch();
    const handleDownload = () => {
        dispatch(downloadPDF({ id }))
    }


    return (
        <div className=' h-screen flex justify-center items-center'>

            <div>
                {
                    isLoading && <h1>Downloading...</h1>

                }
                <h1>Order review </h1> <br /><br />

                <button onClick={handleDownload}>click</button>
            </div>

        </div>
    );
};

export default OrderReviewQuote;