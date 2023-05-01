import React from 'react';
import { useState } from "react";
import SharedBar from '../../../Components/SharedBar/SharedBar';
import LineChart from '../../Carts/LineChart';
import PiaChart from "../../Carts/PieChart";
import { SupplierData } from "../../Carts/SupplierData";
import { OrderData } from "../../Carts/OrderData";
import SupplierCards from './SupplierCards';


const SupplierHomePage = () => {
  const [supplierData] = useState({
    labels: SupplierData.map((data) => data.name),
    datasets: [
      {
        label: "Per Month :Total Earning",
        data: SupplierData.map((data) => data.rating ),
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
        {/* <div style={{ width: "100%" }}>
          <p className="mb-5 text-center">Order Gained(last 5 years)</p>
         <BarChart chartData={orderData} /> 
        </div> */}

        <div style={{ width: "100%" }} className=" bg-white ">
          <p className="mb-5 text-center">Total Earnings</p>

        <PiaChart chartData={supplierData} /> 
        </div>

      </div>
    </div>
  );
};

export default SupplierHomePage;