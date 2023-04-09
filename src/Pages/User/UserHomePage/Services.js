import { useState } from "react";
import { UserData } from "../../Carts/Data";
import LineChart from "../../Carts/LineChart";
import PieChart from "../../Carts/PieChart";


function Services() {
  const [userData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
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
      <p className="mb-5 text-center">User Gained(last 4 years)</p>

        <LineChart chartData={userData} />
      </div>

    <div className="w-100 lg:m-auto  bg-white lg:px-20 py-5" >
    <p className="mb-5 text-center">Carbon Dioxide Increase</p>
        <PieChart chartData={userData} />
      </div>
    </div>
  );
}

export default Services;