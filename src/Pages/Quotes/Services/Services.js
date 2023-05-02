import React from 'react';
import { Link, useParams } from 'react-router-dom';
import BackButton from '../../../Components/Buttons/BackButton';
import ServicesCard from '../../../Components/Cards/ServicesCard';
import simulation from '../../../Assets/Images/simulation.png'
import optimization from '../../../Assets/Images/optimization.png'
import consultancy from '../../../Assets/Images/consulting.png'
import printing from '../../../Assets/Images/printing.png'

const Services = () => {

    const { id } = useParams();
  
    return (
        <React.Fragment>
            <BackButton />
            <div className=' h-screen  overflow-y-auto flex justify-center items-center'>

                <div>
                    <div className=' text-center mb-14 text-gray-500'>
                        <h3 className='text-4xl mb-4'>Choose a service</h3>
                        <p className=' text-sm'>Not sure?  Compare services</p>
                    </div>
                    <div className=' flex justify-center flex-wrap  gap-5'>
                    
                   <div className='border-2 h-60 w-60 flex justify-around items-center duration-500 hover:border-blue-500 rounded-xl hover:duration-500 hover:translate-x-1 hover:translate-y-1  cursor-pointer bg-green-300'>
                   <ServicesCard >
                            <Link to={`/quotes/create/${id}?type=3D Printing`} >
                                <div className=' flex justify-evenly'>
                                <img className='w-24' src={printing} alt='3dPrintingImage'/>
                                   
                                </div>
                                <p className=' text-lg font-bold  text-center'>3D Printing</p>
                            </Link>
                    </ServicesCard>
                   </div>

                   <div className='border-2 h-60 w-60 flex justify-around items-center duration-500 hover:border-blue-500 rounded-xl hover:duration-500 hover:translate-x-1 hover:translate-y-1  cursor-pointer bg-green-300'>
                   
                        <ServicesCard >
                            <div className=' '>
                                <div className=' flex justify-evenly'>
                                <img className='w-24' src={consultancy} alt='consultancyImage'/>
                                   
                                </div>
                                <p className=' text-lg font-bold   text-center'>Consultancy</p>
                            </div>
                        </ServicesCard>
                    </div>

                    <div className='border-2 h-60 w-60 flex justify-around items-center duration-500 hover:border-blue-500 rounded-xl hover:duration-500 hover:translate-x-1 hover:translate-y-1  cursor-pointer bg-gray-200'>
                        <ServicesCard >
                            <div className=' '>
                                <div className=' flex justify-evenly'>
                                <img className='w-24' src={optimization} alt='optimizationImage'/>
                                    
                                </div>
                                <p className=' text-lg font-bold text-center'>Optimization <br/>(Premium Feature)</p>
                               <div className='mt-4 flex justify-center'>
                               <button className="flex items-center justify-center  w-full text-slate-50 font-extrabold latter tracking-wider p-2 border bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md active:ring-2 active:ring-offset-1   text-sm active:bg-gradient-to-l">Try Now</button>
                               </div>
                            </div>
                        </ServicesCard>
                    </div>

                    <div className='border-2 h-60 w-60 flex justify-around items-center duration-500 hover:border-blue-500 rounded-xl hover:duration-500 hover:translate-x-1 hover:translate-y-1  cursor-pointer bg-gray-200'>
                        <ServicesCard >
                            <div >
                                <div className=' flex justify-evenly'>
                                   <img className='w-24' src={simulation} alt='SimulationImage'/>
                                    
                                </div>
                                <p className='text-lg font-bold text-center'>Simulation <br/>(Premium Feature)</p>
                                <div className='mt-4 flex justify-center'>
                               <button className="flex items-center justify-center  w-full text-slate-50 font-extrabold latter tracking-wider p-2 border bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md active:ring-2 active:ring-offset-1   text-sm active:bg-gradient-to-l">Try Now</button>
                               </div>
                            </div>
                        </ServicesCard>
                    </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Services;