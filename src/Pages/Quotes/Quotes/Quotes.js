import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../../Components/Cards/Card';
import { IoMdAddCircle } from 'react-icons/io'
const Quotes = () => {
    return (
        <div div className='w-64 h-64 '>
            <Link to="/quotes/services/123456789">
                <Card>
                    <IoMdAddCircle className='mx-auto w-20 h-20 text-indigo-500' />
                    <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white text-center">Create your new <br /> Quote</h5>

                </Card>
            </Link>
        </div>
    );
};

export default Quotes;