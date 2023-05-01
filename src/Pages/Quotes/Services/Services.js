import React from 'react';
import { Link, useParams } from 'react-router-dom';
import BackButton from '../../../Components/Buttons/BackButton';
import ServicesCard from '../../../Components/Cards/ServicesCard';

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
                                    <svg className=' w-24' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 94.4 106.96" ><path fill="#E5E7E5" d="M59.07 26.6v8.23L48.2 38.05v31.18h-2V38.05l-10.87-3.22V26.6H1.35v42.63h91.7V26.6z"></path><path fill="#A8A8AB" d="M78.01 18.35H59.07v8.25h33.98zM16.39 18.35L1.35 26.6h33.98v-8.25z"></path><path fill="#343842" d="M47.2 1.43L16.37 18.35h18.96v16.48l10.87 3.22v31.18h2V38.05l10.87-3.22V18.35h18.96z"></path><g fill="#343842"><path d="M24.861 63.526l.59-1.91 4.3 1.329-.59 1.91zM31.558 65.59l.591-1.912 4.3 1.33-.591 1.91z"></path></g><g fill="#343842"><path d="M30.776 52.918l1.46-1.367 3.076 3.284-1.46 1.367zM36.356 58.881l1.46-1.367 3.076 3.284-1.46 1.368z"></path></g><g fill="#343842"><path d="M65.217 62.91l4.31-1.296.576 1.915-4.31 1.296zM58.282 64.99l4.309-1.297.576 1.915-4.308 1.297z"></path></g><g fill="#343842"><path d="M59.146 54.841l3.076-3.284 1.46 1.367-3.076 3.284zM53.58 60.795l3.075-3.285 1.46 1.367-3.076 3.285z"></path></g><g><path fill="#409DCA" d="M58.13 77.38h34.92v-8.15H1.35v8.15h35.17v2H1.35v1.06l13.16 7.23h16.14v2h-12.5l29.05 15.94 29.05-15.94h-12.5v-2h16.14l13.16-7.23v-1.06H58.13z"></path><path fill="#E5E7E5" d="M1.35 77.38h35.18v2H1.35zM14.51 87.67l3.64 2h12.5v-2zM63.75 89.67h12.5l3.64-2H63.75zM58.13 77.38h34.92v2H58.13z"></path></g></svg>
                                </div>
                                <p className=' text-sm  text-center'>3D Printing</p>
                            </Link>
                    </ServicesCard>
                   </div>

                   <div className='border-2 h-60 w-60 flex justify-around items-center duration-500 hover:border-blue-500 rounded-xl hover:duration-500 hover:translate-x-1 hover:translate-y-1  cursor-pointer bg-green-300'>
                   
                        <ServicesCard >
                            <div className=' '>
                                <div className=' flex justify-evenly'>
                                    <svg className='w-24' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 94.4 106.96" ><path fill="#A7A8AA" d="M64.38 10.86v10.05h8.55v2h-8.55v7.29l16.08 8.92v29.5l-16.08 8.91v7.29h8.55v2h-8.55v9.36l28.67-15.74V26.6z"></path><path fill="#E5E7E5" d="M72.93 86.82v-2h-8.55v-7.29l16.08-8.91v-29.5L64.38 30.2v-7.29h8.55v-2h-8.55V10.86L47.2 1.43l-16.93 9.29v10.19h8.26v2h-8.26v7.29l-16.08 8.92v13.7h12.29V41.61L47.26 30.2l20.78 11.41v24.11L47.26 77.13 26.48 65.72v-10.9H14.19v13.8l16.08 8.91v7.29h8.26v2h-8.26v9.5l16.93 9.29 17.18-9.43v-9.36z"></path><path fill="#A7A8AA" d="M30.27 84.82v-7.29l-16.08-8.91v-13.8H1.35v25.62l28.92 15.88v-9.5h8.26v-2zM30.27 20.91V10.72L1.35 26.6v26.22h12.84v-13.7l16.08-8.92v-7.29h8.26v-2z"></path><path fill="#429DCA" d="M68.04 41.61L47.26 30.2 26.48 41.61v11.21H1.35v2h25.13v10.9l20.78 11.41V53.67z"></path><path fill="#343842" d="M47.26 77.13l20.78-11.41V41.61L47.26 53.67z"></path></svg>
                                </div>
                                <p className=' text-sm  text-center'>Consultancy</p>
                            </div>
                        </ServicesCard>
                    </div>

                    <div className='border-2 h-60 w-60 flex justify-around items-center duration-500 hover:border-blue-500 rounded-xl hover:duration-500 hover:translate-x-1 hover:translate-y-1  cursor-pointer bg-gray-200'>
                        <ServicesCard >
                            <div className=' '>
                                <div className=' flex justify-evenly'>
                                    <svg className='w-24' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 94.4 106.96" ><path fill="#A7A8AA" d="M64.38 10.86v10.05h8.55v2h-8.55v7.29l16.08 8.92v29.5l-16.08 8.91v7.29h8.55v2h-8.55v9.36l28.67-15.74V26.6z"></path><path fill="#E5E7E5" d="M72.93 86.82v-2h-8.55v-7.29l16.08-8.91v-29.5L64.38 30.2v-7.29h8.55v-2h-8.55V10.86L47.2 1.43l-16.93 9.29v10.19h8.26v2h-8.26v7.29l-16.08 8.92v13.7h12.29V41.61L47.26 30.2l20.78 11.41v24.11L47.26 77.13 26.48 65.72v-10.9H14.19v13.8l16.08 8.91v7.29h8.26v2h-8.26v9.5l16.93 9.29 17.18-9.43v-9.36z"></path><path fill="#A7A8AA" d="M30.27 84.82v-7.29l-16.08-8.91v-13.8H1.35v25.62l28.92 15.88v-9.5h8.26v-2zM30.27 20.91V10.72L1.35 26.6v26.22h12.84v-13.7l16.08-8.92v-7.29h8.26v-2z"></path><path fill="#429DCA" d="M68.04 41.61L47.26 30.2 26.48 41.61v11.21H1.35v2h25.13v10.9l20.78 11.41V53.67z"></path><path fill="#343842" d="M47.26 77.13l20.78-11.41V41.61L47.26 53.67z"></path></svg>
                                </div>
                                <p className=' text-sm  text-center'>Optimization <br/>(Premium Feature)</p>
                               <div className='flex justify-center'>
                               <button className="bg-black ">Try Now</button>
                               </div>
                            </div>
                        </ServicesCard>
                    </div>

                    <div className='border-2 h-60 w-60 flex justify-around items-center duration-500 hover:border-blue-500 rounded-xl hover:duration-500 hover:translate-x-1 hover:translate-y-1  cursor-pointer bg-gray-200'>
                        <ServicesCard >
                            <div >
                                <div className=' flex justify-evenly'>
                                    <svg className=' w-24 ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 94.4 106.96" ><path fill="#E5E7E5" d="M63.32 10.27l-4.59 4.77h-4.49v3.72l-14.08 7.72V15.04h-4.49l-4.59-4.76L1.35 26.6v42.63h24.2l11.17 20.12H57.1l11.72-20.12h24.23V26.6z"></path><path fill="#409DCA" d="M57.1 89.35H36.72L25.55 69.23H1.35v11.21l45.85 25.17 45.85-25.17V69.23H68.81z"></path><path fill="#A8A8AB" d="M42.5 60.89l9.4-5.16v-7.58l-9.4 5.15zM42.5 75.34l4.75-2.55v5.64l4.65-2.37V62.24l-9.4 5.15zM42.5 46.79l9.4-5.15v-7.58l-9.4 5.15zM42.5 25.2v7.5l9.4-5.15v-7.51z"></path><path fill="#343842" d="M40.16 62.17v6.5l14.08-7.72v-6.5zM40.16 48.08v6.5l14.08-7.72v-6.5zM40.16 33.99v6.5l14.08-7.72v-6.5zM47.2 1.43l-16.12 8.85 4.59 4.76h4.49v11.44l14.08-7.72v-3.72h4.49l4.59-4.77zM47.25 78.43v-5.64l-8.15 4.37v3.46l8.1 3.46 8.1-3.46v-6.3z"></path></svg>
                                </div>
                                <p className=' text-sm  text-center'>Simulation <br/>(Premium Feature)</p>
                                <button class="rounded-full ...">Try Now</button>

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