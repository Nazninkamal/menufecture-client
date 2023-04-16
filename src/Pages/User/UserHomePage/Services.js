import { useState } from "react";
import { UserData } from "../../Carts/Data";
import LineChart from "../../Carts/LineChart";
import PieChart from "../../Carts/PieChart";


function Services() {
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

  // IF YOU SEE THIS COMMENT: I HAVE GOOD EYESIGHT

  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-10 mt-10">
      {/* <div style={{ width: "100%" }}>
        <BarCharts chartData={userData} />
      </div> */}
      
      <div className="w-100 bg-white ">
      <p className="mb-5 text-center">Great Impact Of Our Site on the Environment </p>

        <LineChart chartData={userData} />
      </div>

    <div className="w-100 lg:m-auto  bg-white lg:px-20 py-5" >
    <p className="mb-5 text-center">Environmental Impact</p>
        <PieChart chartData={userData} />
      </div>
    </div>
  );
}

export default Services;