import { useState } from "react";
import PieChart from "../../Carts/PieChart";

const Services = () => {
  const CreditData = [
    {
      id: 1,
      name: "Available",
      credit: 1800,
    },
    {
      id: 2,
      name: "Used",
      credit: 1200,
    }
  ];

  const CarbonData = [
    {
      id: 1,
      name: "Target",
      credit: 800,
    },
    {
      id: 2,
      name: "Reached",
      credit: 200,
    }
  ];

  const MaterialData = [
    {
      id: 1,
      name: "Target",
      credit: 2000,
    },
    {
      id: 2,
      name: "Reached",
      credit: 1100,
    }
  ];

  const EnergyData = [
    {
      id: 1,
      name: "Target",
      credit: 1800,
    },
    {
      id: 2,
      name: "Reached",
      credit: 600,
    }
  ];


  const [creditData] = useState({
    labels: CreditData.map((data) => data.name),
    datasets: [
      {
        label: "Credit",
        data: CreditData.map((data) => data.credit),
        backgroundColor: [
          'green',
          'rgb(54, 162, 235)'
         
        ],
        hoverOffset: 4
      },
    ],
  });

  const [carbonData] = useState({
    labels: CarbonData.map((data) => data.name),
    datasets: [
      {
        label: "CO2-Eq Saving",
        data: CarbonData.map((data) => data.credit),
        backgroundColor: [
          'green',
          'rgb(54, 162, 235)'
         
        ],
        hoverOffset: 4
      },
    ],
  });

  const [materialData] = useState({
    labels: MaterialData.map((data) => data.name),
    datasets: [
      {
        label: "Material Saving ",
        data: MaterialData.map((data) => data.credit),
        backgroundColor: [
          'green',
          'rgb(54, 162, 235)'
         
        ],
        hoverOffset: 4
      },
    ],
  });

  const [energyData] = useState({
    labels: EnergyData.map((data) => data.name),
    datasets: [
      {
        label: "Energy Saving",
        data: EnergyData.map((data) => data.credit),
        backgroundColor: [
          'green',
          'rgb(54, 162, 235)'
         
        ],
        hoverOffset: 4
      },
    ],
  });

  // IF YOU SEE THIS COMMENT: I HAVE GOOD EYESIGHT

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-10 mt-20">

    <div className="w-100 lg:m-auto  bg-white lg:px-10 py-5" >
    <p className="mb-5 text-center">Total Credit Used/Available</p>
        <PieChart chartData={creditData} />
      </div>

      <div className="w-100 lg:m-auto  bg-white lg:px-10 py-5" >
    <p className="mb-5 text-center">CO2-Eq Saving (Reached/target)</p>
        <PieChart chartData={carbonData} />
      </div>

      <div className="w-100 lg:m-auto  bg-white lg:px-10 py-5" >
      <p className="mb-5 text-center">Material Saving (Reached/target)</p>
        <PieChart chartData={materialData} />
      </div>

      <div className="w-100 lg:m-auto  bg-white lg:px-10 py-5" >
      <p className="mb-5 text-center">Energy Saving (Reached/target)</p>
        <PieChart chartData={energyData} />
      </div>
    </div>
  );
}

export default Services;