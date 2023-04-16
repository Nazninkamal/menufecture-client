import React from 'react';
import { useState } from "react";
import SharedBar from '../../../Components/SharedBar/SharedBar';
import LineChart from '../../Carts/LineChart';
import BarChart from "../../Carts/BarChart";
import { EarningData } from "../../Carts/EarningData";
import { OrderData } from "../../Carts/OrderData";
import SupplierCards from './SupplierCards';


const SupplierHomePage = () => {
  const [earningData] = useState({
    labels: EarningData.map((data) => data.month),
    datasets: [
      {
        label: "Per Month :Total Earning",
        data: EarningData.map((data) => data.earning ),
        backgroundColor: [
          'green',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
         
        ],
        hoverOffset: 4
      },
    ],
  });

  const [orderData] = useState({
    labels:OrderData.map((data) => data.month),
    datasets: [
      {
        label: "Per Month :Total Order",
        data: OrderData.map((data) => data.order),
        backgroundColor: [
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
        <div style={{ width: "100%" }}>
          <p className="mb-5 text-center">Order Gained(last 5 years)</p>
         <BarChart chartData={orderData} /> 
        </div>

        <div className="w-100 bg-white ">
          <p className="mb-5 text-center">Total Earnings</p>

        <LineChart chartData={earningData} /> 
        </div>

      </div>
    </div>
  );
};

export default SupplierHomePage;