import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Card from '../../../Components/Cards/Card';
import { IoMdAddCircle } from 'react-icons/io'
import { BsChatLeftQuoteFill } from 'react-icons/bs'
import { useGetMyQuotesQuery } from '../../../Redux/Features/quotes/quotesApi';
const Quotes = () => {
    const { id } = useParams();
    console.log(id);
    const { data: quotes } = useGetMyQuotesQuery({ id });

    return (
        <div div className=' grid grid-cols-10 gap-5 '>
            <div className=' col-span-2 h-64 '>
                <Link to={`/quotes/services/${id}`}>
                    <Card>
                        <div className='h-64 w-auto flex justify-center items-center bg-slate-200'>
                            <div>
                                <IoMdAddCircle className='mx-auto w-20 h-20 text-indigo-500' />
                                <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white text-center">Create your new <br /> Quote</h5>
                            </div>
                        </div>
                    </Card>
                </Link>
            </div>

            {
                quotes?.result?.map(quote =>

                    <div key={quote?._id} className=' col-span-2 '>
                        <Link to={`/quote/configure/${quote?._id}`}>
                            <Card>
                                <p className='text-sm text-center'>Quote</p>
                                <div className='h-64 w-auto flex justify-center items-center'>

                                    <div>

                                        <BsChatLeftQuoteFill className='mx-auto w-20 h-20 text-teal-400' />
                                        <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white text-center">{quote?.quoteTitle?.slice(0, 20)}</h5>
                                    </div>
                                </div>

                            </Card>
                        </Link>
                    </div>

                )
            }
        </div>
    );
};

export default Quotes;