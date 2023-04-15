import React from 'react';
import { useState } from "react";
import SharedBar from '../../../Components/SharedBar/SharedBar';
import LineChart from '../../Carts/LineChart';
import BarChart from "../../Carts/BarChart";
import { UserData } from "../../Carts/Data";
import SupplierCards from './SupplierCards';
import PieChart from '../../Carts/PieChart';


const SupplierHomePage = () => {
  const [userData] = useState({
    labels: UserData.map((data) => data.name),
    datasets: [
      {
        label: "Per Month : Percentage",
        data: UserData.map((data) => data.percentage ),
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
         <BarChart chartData={userData} /> 
        </div>

        <div className="w-100 bg-white ">
          <p className="mb-5 text-center">Total Earnings</p>

        <LineChart chartData={userData} /> 
        </div>

      <div className="w-100 lg:m-auto  bg-white px-20 py-5" >
    <p className="mb-5 text-center">Carbon Dioxide Increase</p>
        <PieChart chartData={userData} />
      </div> 
      </div>
    </div>
  );
};

export default SupplierHomePage;