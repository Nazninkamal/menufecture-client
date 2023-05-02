import React, {useEffect } from 'react';
import { useState } from "react";
import SharedBar from '../../../Components/SharedBar/SharedBar';
import PiaChart from "../../Carts/PieChart";
import SupplierCards from './SupplierCards';
import { useGetFeedbackQuery } from '../../../Redux/Features/Feedback/feedbackApi';




const SupplierHomePage = () => {

  const { data, isSuccess } = useGetFeedbackQuery();


  const rating5 = data?.result?.filter((data) => data?.rating === 5);
  const rating4 = data?.result?.filter((data) => data?.rating >= 4 && data?.rating < 5);
  const rating3 = data?.result?.filter((data) => data?.rating >= 3 && data?.rating < 4);
  const rating2 = data?.result?.filter((data) => data?.rating >= 2 && data?.rating < 3);
  const rating1 = data?.result?.filter((data) => data?.rating >= 0 && data?.rating < 2);
  console.log(rating4)




  const userRatingData = [
    {
      id: 1,
      name: "One Star Rating",
      rating: rating1?.length,
    },
    {
      id: 2,
      name: "Two Star Rating",
      rating: rating2?.length,
    },
    {
      id: 3,
      name: "Three Star Rating",
      rating: rating3?.length,
    },
    {
      id: 4,
      name: "Four Star Rating",
      rating: rating4?.length,
    },
    {
      id: 5,
      name: "Five Star Rating",
      rating: rating5?.length,
    },
  ];



  const [userRating, setUserRating] = useState({});


  useEffect(() => {
    setUserRating({
      labels: userRatingData?.map((data) => data?.name),
      datasets: [
        {
          label: "Total Rating",
          data: rating5?.length && userRatingData?.map((data) => data?.rating),
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

    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rating5?.length])



  return (
    <div className=' h-screen overflow-y-auto'>
      <SharedBar pageName={"Supplier Dashboard"} />
      <div className='my-5'>
        <SupplierCards />
      </div>


      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-10 mt-10">

        <div style={{ width: "100%" }} className="w-full bg-white ">
          <p className="mb-5 text-center">Customer Satisfaction rating </p>
          {isSuccess &&

            <PiaChart chartData={userRating} />
          }
        </div>

      </div>
    </div>
  );
};

export default SupplierHomePage;