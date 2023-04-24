import React from 'react';

const Adress = () => {
    return (
        <div className='w-full p-6  bg-white rounded-md shadow-xl lg:max-w-xl '>

        <h1 className="text-3xl font-semibold text-center text-gray-800 uppercase">
         Add Shipping Details 
        </h1>

      <form className="mt-6">
   
         <div className="mb-2">
           <label className="block text-sm font-semibold text-gray-800">
               Phone Number*
           </label>
           <input 
               required="true"
               type="phone-number"
               placeholder='Phone Number*'
               className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 text-sm"
           />
          
       </div>
       <div className="mb-2">
           <label
   
   
               className="block text-sm font-semibold text-gray-800"
           >
               Shipping Address*
           </label>
           <input
              
               required="true"
               type="text"
               placeholder='Your Full Adress*'
               className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 text-sm"
           />
          
       </div>
       
   
       <div className="mt-6">
           <button
               type='submit'
               className="flex items-center justify-center text-sm w-full text-slate-50 font-extrabold latter tracking-wider p-2 border bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md active:ring-2 active:ring-offset-1 active:from-cyan-500">
              Submit
           </button>
   
   
       </div>
   </form>
   
   
        </div>
    );
};

export default Adress;