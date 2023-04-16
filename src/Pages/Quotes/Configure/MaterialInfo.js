import React, { useEffect } from 'react';
import { ImPlus, ImMinus } from 'react-icons/im'



import { useGetMySingleQuotesQuery } from '../../../Redux/Features/quotes/quotesApi';



const MaterialInfo = ({ register, watch, errors, reset, id, setQuantity, quantity, singleSLA, SLA }) => {


  const { data } = useGetMySingleQuotesQuery({ id });

  console.log(data);


  const quote = data?.result;

  console.log(quote);
  useEffect(() => {
    reset(data?.result)
    setQuantity(data?.result?.quantity)
  }, [data?.result, reset, setQuantity])



 

  return (


    <div className="w-full rounded-lg shadow-md lg:max-w-100 xl:w-100 p-5" >
      <h1>1. Material and Finish.</h1>
      <p className='text-sm'>3D Printing selections for: 1 Part</p>

      <div className='flex  justify-between mt-5  text-sm '>
        <p className='text-base mt-3'>Material</p>

        <div className='relative flex justify-center items-center gap-5 md:ml-5 lg:ml-10 mt-2 '>

          {/*************************** Material ***************************/}
          <div disabled className="mb-2">

            <select
              {...register("material", { required: true })}

              className="block  w-56 px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 text-sm ">


              <option value=""

              >I don't know what material</option>
              {

                SLA?.map((sal, i) =>
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
              {...register("resolution", { required: true })}
              disabled={ !SLA && !watch("input-a")}
              className="block w-56 px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 text-sm  ">

              <option value=""

              >No selected</option>
              {/* {
                singleSLA?.resolution?.map((rsl, i) => */}
              <option value={singleSLA?.resolutionHighRes}
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              >{singleSLA?.resolutionHighRes}</option>
              <option value={singleSLA?.resolutionNormal}
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              >{singleSLA?.resolutionNormal}</option>

              {/*      )
              } */}


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
              {...register("finish", { required: true })}
              disabled={!singleSLA && !watch("input-a")}
              className="block w-56 px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 text-sm  ">
              <option value=""

              >No selected</option>
              {/* {
                singleSLA?.finish?.map((f, i) => */}
              <option value={singleSLA?.finishStandard}
              >{singleSLA?.finishStandard}</option>

              <option value={singleSLA?.finishNormal}
              >{singleSLA?.finishNormal}</option>
              {/* )
              } */}
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
              {...register("orientation", { required: true })}
              disabled={!singleSLA && !watch("input-a")}
              className="block w-56 px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 text-sm  ">
              <option
                value=''
              >No selected</option>
              {/*    {
                singleSLA?.orientation?.map((o, i) => */}
              <option value={singleSLA?.orientationLetUsDecide}
              >{singleSLA?.orientationLetUsDecide}</option>
              <option value={singleSLA?.orientationCustom}
              >{singleSLA?.orientationCustom}</option>
              {/*  )
              } */}

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
              disabled={!singleSLA && !watch("input-a")}
              className='block text-center  mx-2 px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40'>
              <ImMinus />
            </button>
            <div>
              <p
                className='block  select-none text-center  w-24  px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40' >{quantity || 0}</p>

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