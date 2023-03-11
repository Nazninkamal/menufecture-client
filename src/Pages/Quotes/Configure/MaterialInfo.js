import React, { useEffect, useState } from 'react';
import { ImPlus, ImMinus } from 'react-icons/im'

import { SLA } from './MaterialsData/MaterialsData';
import { useDispatch } from 'react-redux';
import { createConfigure } from '../../../Redux/Features/quotes/configureSlice';
import { useParams } from 'react-router-dom';



const MaterialInfo = ({ register, watch, reset, errors }) => {




  const { id } = useParams();


  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [singleResolution, setSingleResolution] = useState({});
  const [singleSLA, setSingleSLA] = useState({});


  const res = JSON?.parse(localStorage?.getItem("configure"))?.find(con => con?.id === id);

  const handleCLick = () => {
    console.log(res);
  }


  const [material, resolution, orientation, finish] = watch(['material', 'resolution', 'orientation', 'finish']);









  useEffect(() => {
    const singleSLA = SLA?.find(s => s?.material === material);
    const singleResolution = singleSLA?.resolution?.find(s => s?.title === resolution);
    setSingleSLA(singleSLA);
    setSingleResolution(singleResolution);

  }, [material, resolution]);






  // eslint-disable-next-line react-hooks/exhaustive-deps
  const configure = {
    material: singleSLA?.material,
    resolution: singleSLA?.material && singleResolution?.title,
    price: singleSLA?.material && parseInt(Number(singleResolution?.price)) * quantity,
    orientation: singleSLA?.material && orientation,
    finish: singleSLA?.material && finish,
    quantity: singleSLA?.material && quantity,
    id: id
  }
  useEffect(() => {

    dispatch(createConfigure(configure))
    

  }, [configure, dispatch,id])







  return (


    <div className="w-full rounded-lg shadow-md lg:max-w-100 xl:w-100 p-5" >
      <h1>1. Material and Finish.</h1>
      <p className='text-sm'>3D Printing selections for: 1 Part</p>
      <button type='button' onClick={handleCLick}>CLick</button>
      <div className='flex  justify-between mt-5  text-sm'>
        <p className='text-base mt-3'>Material</p>

        <div className='relative flex justify-center items-center gap-5 md:ml-5 lg:ml-10 mt-2 '>

          {/*************************** Material ***************************/}
          <div className="mb-2">

            <select
              {...register("material")}

              className="block  w-56 px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 text-sm ">


              <option value=""

              >I don't know what material</option>
              {

                SLA.map((sal, i) =>
                  sal?.material && <option key={i} value={sal?.material}
                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white  border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  >

                    {sal?.material}
                  </option>

                )

              }

            </select>
            <p className="text-red-500">{errors.material?.message}</p>
          </div>

        </div>

      </div>

      <div className='flex  justify-between mt-5  text-sm'>
        <p className='text-base mt-3'>Resolution</p>

        <div className='relative flex justify-center items-center gap-5 md:ml-5 lg:ml-10 mt-2'>

          {/*************************** Resolution  ***************************/}
          <div className="mb-2">

            <select
              {...register("resolution")}
              disabled={!singleSLA && !watch("input-a")}
              className="block w-56 px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 text-sm  ">

              <option value=""

              >No selected</option>
              {
                singleSLA?.resolution?.map((rsl, i) =>
                  rsl?.title && <option key={i} defaultValue={rsl?.title} value={rsl?.title}
                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  >{rsl?.title}</option>

                )
              }


            </select>
            <p className="text-red-500">{errors.resolution?.message}</p>
          </div>


        </div>

      </div>

      <div className='flex  justify-between mt-5  text-sm'>
        <p className='text-base mt-3'>Finish</p>

        <div className='relative flex justify-center items-center gap-5 md:ml-5 lg:ml-10 mt-2'>

          {/*************************** Finish   ***************************/}
          <div className="mb-2">
            <select
              {...register("finish")}
              disabled={!singleSLA && !watch("input-a")}
              className="block w-56 px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 text-sm  ">
              <option value=""

              >No selected</option>
              {
                singleSLA?.finish?.map((f, i) =>
                  <option key={i} value={f?.title}
                  >{f?.title}</option>
                )
              }
            </select>
            <p className="text-red-500">{errors.finish?.message}</p>
          </div>
        </div>
      </div>
      <div className='flex  justify-between mt-5  text-sm'>
        <p className='text-base mt-3'>Orientation</p>
        <div className='relative flex justify-center items-center gap-5 md:ml-5 lg:ml-10 mt-2'>
          {/*************************** Orientation    ***************************/}
          <div className="mb-2">
            <select
              {...register("orientation")}
              disabled={!singleSLA && !watch("input-a")}
              className="block w-56 px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 text-sm  ">
              <option value=""

              >No selected</option>
              {
                singleSLA?.orientation?.map((o, i) =>
                  <option key={i} value="Let Us Decide"
                  >{o?.title}</option>
                )
              }

            </select>
            <p className="text-red-500">{errors.orientation?.message}</p>
          </div>
        </div>

      </div>
      <div className='flex  justify-between mt-5'>
        <p className='text-base mt-3'>Quentity</p>
        <div className='relative flex justify-center items-center gap-5 md:ml-5 lg:ml-10 mt-2 '>
          <div className=' flex justify-between items-center p-2'>


            <button
              onClick={() => {
                if (quantity > 1) {
                  setQuantity(quantity - 1)
                }
              }}
              type="button"
              // disabled={!singleSLA && !watch("input-a")}
              className='block text-center  mx-2 px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40'>
              <ImMinus />
            </button>
            <div>
              <p
                className='block  select-none text-center  w-24  px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40' >{quantity}</p>

              {/* <input type="number" onChange={(e) => setQuantity(e.target.value)} name="" id="" /> */}
            </div>
            <button
              onClick={() => {

                setQuantity(quantity + 1)

              }}
              type="button"
              disabled={!singleSLA && !watch("input-a")}
              className='block text-center  mx-2 px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40'>
              <ImPlus />
            </button>
          </div>
        </div>
      </div>
    </div>





  );
};

export default MaterialInfo;