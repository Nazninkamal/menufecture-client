import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Card from '../../../Components/Cards/Card';
import { IoMdAddCircle } from 'react-icons/io'
import { useDeleteMySingleQuotesMutation, useGetMyQuotesQuery } from '../../../Redux/Features/quotes/quotesApi';
import ViewThreeDFile from './ViewThreeDFile';
import BackButton from '../../../Components/Buttons/BackButton';
import SharedBar from '../../../Components/SharedBar/SharedBar'
import Dropdown from '../../../Components/Dropdown/Dropdown';
import Modal from '../../../Components/Modal/Modal';
import QuoteRename from './QuoteRename';
const Quotes = () => {
    const { id } = useParams();
    const [isModal, setModal] = useState(false);
    const [quiteId, setQuiteId] = useState('');
    const { data: quotes } = useGetMyQuotesQuery({ id }, { refetchOnMountOrArgChange: true });

    const [deleteQuote, { isSuccess }] = useDeleteMySingleQuotesMutation();

    const selectId = (id) => {
        setQuiteId(id)
        setModal(true)
    }


    useEffect(() => {
        if (isSuccess) {
            alert('Delete Successfully')
        }
    }, [isSuccess])

    const handleDeleteProject = (id) => {
        console.log(id);
        deleteQuote({ id })
    }

    return (
        <div>
            <BackButton />
            <SharedBar />
            <div className='pt-7'>
                <div className='grid grid-cols-10 gap-5 '>
                    <div className='col-span-10 sm:col-span-5 md:col-span-2 '>
                        <Link to={`/quotes/services/${id}`}>
                            <Card>
                                <div className='h-64 flex justify-center items-center bg-slate-200'>
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

                            <div key={quote?._id} className='col-span-10 sm:col-span-5 md:col-span-2  h-64 '>
                                <Dropdown

                                    menus={
                                        [
                                            { title: 'Rename', action: () => selectId(quote?._id) },
                                            { title: 'delete', action: () => handleDeleteProject(quote?._id) },
                                        ]
                                    }
                                />
                                <Link to={`/quote/configure/${quote?._id}`}>
                                    <Card>
                                        <div className=' h-64 flex justify-center items-center'>
                                            <div className=' pt-4 '>
                                                <p className='text-sm text-center'>Quote</p>
                                                <div className=' flex justify-center items-center'>

                                                    <div>
                                                        <div className=' text-center'>
                                                            <ViewThreeDFile file={quote?.threeDFile?.fileURL} />
                                                        </div>

                                                        <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white text-center">{quote?.quoteTitle?.slice(0, 20)}</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </Card>
                                </Link>
                            </div>

                        )
                    }
                    <div className=' flex justify-center'>
                        <Modal isModal={isModal} setModal={setModal}>
                            <QuoteRename setModal={{ setModal, quiteId }} /* quiteId={quiteId} */ />
                        </Modal>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Quotes;