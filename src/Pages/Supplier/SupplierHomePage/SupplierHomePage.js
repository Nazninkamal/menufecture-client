import React, { useCallback, useEffect } from 'react';
import { useState } from "react";
import SharedBar from '../../../Components/SharedBar/SharedBar';
import PiaChart from "../../Carts/PieChart";
// import { SupplierData } from "../../Carts/SupplierData";
// import { OrderData } from "../../Carts/OrderData";
import SupplierCards from './SupplierCards';
import { useGetFeedbackQuery } from '../../../Redux/Features/Feedback/feedbackApi';
import axios from 'axios';
import { token } from '../../../Utility/Token/token';


const SupplierHomePage = () => {

  const [feedbacks, setFeedBacks] = useState([]);
   

  const { data,isLoading } = useGetFeedbackQuery();
  // console.log(data?.result);

  const ratingTest= useCallback(async() =>{
    const response = await axios({
      url: "http://localhost:5000/api/v1/feedback/get-feedback",
      method: 'GET',
      headers: {
          Authorization: token
      }
  
  })

  setFeedBacks(response?.data?.result)
  },[])

  
  
  useEffect(() => {
    ratingTest()
    
  }, [ratingTest]);

  const rating5 = feedbacks?.filter((data)=>data?.rating > 4)

  console.log(rating5?.length)




  const SupplierData = [
    {
      id: 1,
      name: "One Star Rating",
      rating: 2,
    },
    {
      id: 2,
      name: "Two Star Rating",
      rating: 5,
    },
    {
      id: 3,
      name: "Three Star Rating",
      rating: 28,
    },
    {
        id: 4,
        name: "Four Star Rating",
        rating: 40,
      },
      {
        id: 5,
        name: "Five Star Rating",
        rating:  rating5?.length,
      },
  ];



  const [supplierData] = useState({
    labels: SupplierData?.map((data) => data?.name),
    datasets: [
      {
        label: "Per Month :Total Earning",
        data: SupplierData?.map((data) => data?.rating ),
        backgroundColor: [
          "red",
          "black",
          'green',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
         
        ],
        hoverOffset: 4
      },
    ],
  });

  return (
    <div className=' h-screen overflow-y-auto'>
      <SharedBar pageName={"Supplier Dashboard"} />
      <div className='my-5'>
        <SupplierCards />
      </div>

      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-10 mt-10">
       

        <div style={{ width: "100%" }} className="w-full bg-white ">
          <p className="mb-5 text-center">Total Earnings</p>
{ isLoading?
<h1>Loading...</h1>:
        <PiaChart chartData={supplierData} /> 
}
        </div>

      </div>
    </div>
  );
};

export default SupplierHomePage;