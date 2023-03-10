import React, { useEffect, useState } from 'react';
import { ImPlus, ImMinus } from 'react-icons/im'

import { SLA } from './MaterialsData/MaterialsData';
import { useDispatch } from 'react-redux';
import { createConfigure } from '../../../Redux/Features/quotes/configureSlice';
import { useParams } from 'react-router-dom';
import { useGetMySingleQuotesQuery, useUpdateMySingleQuotesMutation } from '../../../Redux/Features/quotes/quotesApi';

const MaterialInfo = ({register,watch,reset,errors}) => {




  const { id } = useParams();
  const { data:configureData } = useGetMySingleQuotesQuery({ id });
  const [updateQuote] = useUpdateMySingleQuotesMutation({ id });
  const dispatch=useDispatch();
  const [quantity, setQuantity] = useState(undefined);
/* const [singleResolution,setSingleResolution]=useState({});
const [singleSLA,setSingleSLA]=useState({}); */

 

  const [material, resolution, orientation, finish] = watch(['material', 'resolution', 'orientation', 'finish']);



  

    const singleSLA = SLA?.find(s => s?.material === material);
  const singleResolution = singleSLA?.resolution?.find(s => s?.title === resolution);
  


  
 


  useEffect(() => {
    reset(configureData?.result);
    setQuantity(quantity || configureData?.result?.quantity||1);
  }, [configureData?.result, reset, quantity])

 

  useEffect(() => {  
      const configure = {
      material: singleSLA?.material,
      resolution: singleResolution?.title,
      price: parseInt(Number(singleResolution?.price)) * quantity,
      orientation: orientation,
      finish: finish,
      quantity: quantity
    }
      dispatch(createConfigure(configure))
      updateQuote({id,configure})
  }, [dispatch,singleSLA?.material,singleResolution?.title,singleResolution?.price,finish,quantity,orientation,id,updateQuote])


  const handleQuantityInCrement = (e) => {
    e.preventDefault();
    setQuantity(quantity + 1)
  }

  const handleQuantityDecrement = (e) => {
    e.preventDefault();
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }



 


  return (
    

      <div className="w-full rounded-lg shadow-md lg:max-w-100 xl:w-100 p-5" >
        <h1>1. Material and Finish.</h1>
        <p className='text-sm'>3D Printing selections for: 1 Part</p>

        <div className='flex  justify-between mt-5  text-sm'>
          <p className='text-base mt-3'>Material</p>

          <div className='relative flex justify-center items-center gap-5 md:ml-5 lg:ml-10 mt-2 '>

            {/*************************** Material ***************************/}
            <div className="mb-2">

              <select
                {...register("material")}

                className="block  w-56 px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 text-sm ">


                <option value="I don't know what material"

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
                onClick={handleQuantityInCrement}
                disabled={!singleSLA && !watch("input-a")}
                className='block text-center  mx-2 px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40'>
                <ImPlus />
              </button>
              <div>
                <p
                  className='block  select-none text-center  w-24  px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40' >{quantity}</p>
              </div>
              <button
                onClick={handleQuantityDecrement}
                disabled={!singleSLA && !watch("input-a")}
                className='block text-center  mx-2 px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40'>
                <ImMinus />
              </button>
            </div>
          </div>
        </div>
      </div>


 


  );
};

export default MaterialInfo;