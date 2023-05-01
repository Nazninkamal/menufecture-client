import React, { useEffect, useState } from 'react';
import { ImPlus, ImMinus } from 'react-icons/im'



import { useGetMySingleQuotesQuery, useUpdateMySingleQuotesMutation } from '../../../Redux/Features/quotes/quotesApi';
import Modal3 from '../../../Components/Modal/Modal3';
import { fileUploader } from '../../../Redux/Features/quotes/quotesSlice';
import { useDispatch } from 'react-redux';





const MaterialInfo = (
  {
    register,
    watch,
    errors,
    reset, id,
    setQuantity,
    quantity,
    singleSLA,
    SLA

  }
) => {


  const { data } = useGetMySingleQuotesQuery({ id });
  const [updateQuote] = useUpdateMySingleQuotesMutation();
  const [modalOn, setModalOn] = useState(false);
  const [additionalFile, setAdditionalFile] = useState(undefined);
  const [additionalText, setAdditionalText] = useState(undefined);


  const dispatch = useDispatch();

  const clicked = () => {
    setModalOn(true)
  }
  const handleOKClick = async () => {
    const configure = {
      additionalFile, additionalText
    }
    await updateQuote({ id, configure })
      .then(() => {
        setModalOn(false)
      })
  }


  useEffect(() => {
    let newData = { ...data?.result };
    // newData.additionalText = additionalText || data?.result?.additionalText;
    reset(newData);
    setQuantity(data?.result?.quantity)
  }, [data?.result, reset, setQuantity])






  const handleUpLoadFile = async (e) => {
    const formData = new FormData();
    formData.append("file", await e.target.files[0]);
    await dispatch(fileUploader({ formData }))
      .then(async res => {
        const file = res?.payload?.data?.result;
        setAdditionalFile(file)
      })
  }



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
              disabled={!SLA && !watch("input-a")}
              className="block w-56 px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 text-sm  ">

              <option value=""

              >No selected</option>

              <option value={singleSLA?.resolutionHighRes}
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              >{singleSLA?.resolutionHighRes}</option>
              <option value={singleSLA?.resolutionNormal}
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              >{singleSLA?.resolutionNormal}</option>




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
      <h1 className='pt-24'>2. More Options</h1>
      <div className='flex  justify-between mt-5  '>

        <p className='text-base mt-3'>
          Additional Info
        </p>
        <div className='relative flex justify-center items-center gap-5 md:ml-5 lg:ml-10 mt-2'>
          {/*************************** additional    ***************************/}
          <button onClick={clicked} type='button' className=' text-sm text-blue-400'>Special Instruction</button>

        </div>

      </div>
      {modalOn && <Modal3 >

        <div className=''>
          <div className=''>

            <h1 className=' py-4 text-2xll'>Special Instructions</h1>
            <p className=' text-xs'>Special requests can impact pricing and lead times. Adding a note will trigger manual review by Protolabs. This can add turnaround time to our analysis.</p>
            <div className="mb-2">


              <textarea
                defaultValue={data?.result?.additionalText}
                onChange={(e) => setAdditionalText(e.target.value)}
                placeholder='Leave your note here'
                className="block w-full h-28 px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 text-sm  ">

              </textarea>
              <p className="text-red-500">{errors.additionalText?.message}</p>
            </div>
            <div className="mb-2">

              <div className="mb-2  border border-dashed p-5">
                <span className=' text-xs'>We accept , PDF, PNG,jpeg and JPG  formats</span>

                <input
                  onChange={handleUpLoadFile}
                  type='file'
                  accept="application/pdf,image/png, image/jpeg,image/jpg"
                  className="block    py-2 mt-2 text-purple-700 bg-white  rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 text-sm  ">

                </input>
                <p className="text-red-500">{errors.additional?.message}</p>
              </div>
            </div>

          </div>

        </div>
        <div className="flex">
          <button onClick={handleOKClick} type='button' className=" rounded px-4 py-2 text-white  bg-green-400 ">Done</button>
        </div>



      </Modal3>}
    </div>









  );
};

export default MaterialInfo;