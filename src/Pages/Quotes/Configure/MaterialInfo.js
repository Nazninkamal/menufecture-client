import React from 'react';

const MaterialInfo = () => {
    return (
        <div className="w-full rounded-lg shadow-md lg:max-w-100 xl:w-100 p-5" >
           <h1>1. Material and Finish.</h1>
           <p className='text-sm'>3D Printing selections for: 1 Part</p>

           <div className='flex  justify-between mt-5  text-sm'>
              <p className='text-base mt-3'>Material</p>
            
             <div className='relative flex justify-center items-center gap-5 md:ml-5 lg:ml-10 mt-2 '>

              <button className='relative flex justify-center items-center bg-white border focus:outline-none shadow text-gray-600 rounded focus:ring ring-gray-200 group '>
              <p className='px-4 '>Select Material</p>
              <span className='border-l p-2 hover:bg-gray-100'>
              <svg width="20px" height="20px" viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" fill="#000000" /></svg>
              </span>

             <div className='absolute hidden group-focus:block top-full min-w-full w-max bg-white shadow-md mt-1 rounded '>
               <ul className='text-left border rounded '>
                 <li className='px-4 py-1 hover:bg-gray-100 border-b'>Menu List 1</li>
                 <li className='px-4 py-1 hover:bg-gray-100 border-b'>Menu List 1</li>
                 <li className='px-4 py-1 hover:bg-gray-100 border-b'>Menu List 1</li>
                 <li className='px-4 py-1 hover:bg-gray-100 border-b'>Menu List 1</li>
               </ul>
             </div>
           </button>


           </div>

           </div>

           <div className='flex  justify-between mt-5  text-sm'>
              <p className='text-base mt-3'>Resolution</p>
            
             <div className='relative flex justify-center items-center gap-5 md:ml-5 lg:ml-10 mt-2'>

              <button className='relative flex justify-center items-center bg-white border focus:outline-none shadow text-gray-600 rounded focus:ring ring-gray-200 group'>
              <p className='px-4'>Select Material</p>
              <span className='border-l p-2 hover:bg-gray-100'>
              <svg width="20px" height="20px" viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" fill="#000000" /></svg>
              </span>

             <div className='absolute hidden group-focus:block top-full min-w-full w-max bg-white shadow-md mt-1 rounded '>
               <ul className='text-left border rounded'>
                 <li className='px-4 py-1 hover:bg-gray-100 border-b'>Menu List 1</li>
                 <li className='px-4 py-1 hover:bg-gray-100 border-b'>Menu List 1</li>
           
               </ul>
             </div>
           </button>


           </div>

           </div>

           <div className='flex  justify-between mt-5  text-sm'>
              <p className='text-base mt-3'>Finish</p>
            
             <div className='relative flex justify-center items-center gap-5 md:ml-5 lg:ml-10 mt-2'>

              <button className='relative flex justify-center items-center bg-white border focus:outline-none shadow text-gray-600 rounded focus:ring ring-gray-200 group'>
              <p className='px-4'>Select Material</p>
              <span className='border-l p-2 hover:bg-gray-100'>
              <svg width="20px" height="20px" viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" fill="#000000" /></svg>
              </span>

             <div className='absolute hidden group-focus:block top-full min-w-full w-max bg-white shadow-md mt-1 rounded '>
               <ul className='text-left border rounded'>
                 <li className='px-4 py-1 hover:bg-gray-100 border-b'>Menu List 1</li>
                 <li className='px-4 py-1 hover:bg-gray-100 border-b'>Menu List 1</li>
               
               </ul>
             </div>
           </button>


           </div>

           </div>

           <div className='flex  justify-between mt-5  text-sm'>
              <p className='text-base mt-3'>Orientation</p>
            
             <div className='relative flex justify-center items-center gap-5 md:ml-5 lg:ml-10 mt-2'>

              <button className='relative flex justify-center items-center bg-white border focus:outline-none shadow text-gray-600 rounded focus:ring ring-gray-200 group'>
              <p className='px-4'>Select Material</p>
              <span className='border-l p-2 hover:bg-gray-100'>
              <svg width="20px" height="20px" viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" fill="#000000" /></svg>
              </span>

             <div className='absolute hidden group-focus:block top-full min-w-full w-max bg-white shadow-md mt-1 rounded '>
               <ul className='text-left border rounded'>
                 <li className='px-4 py-1 hover:bg-gray-100 border-b'>Menu List 1</li>
               
               </ul>
             </div>
           </button>


           </div>

           </div>
           <div className='flex  justify-between mt-5'>
              <p className='text-base mt-3'>Quentity</p>
            
             <div className='relative flex justify-center items-center gap-5 md:ml-5 lg:ml-10 mt-2'>

           </div>

           </div>

          
                
               
                      
                       
        </div>
              
      
    );
};

export default MaterialInfo;