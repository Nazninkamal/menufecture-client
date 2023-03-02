import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../../Components/Cards/Card';
import { IoMdAddCircle } from 'react-icons/io'
const Quotes = () => {
    return (
        <div>
            <Card>
                <Link to="/quotes/services/123456789">
                    <IoMdAddCircle className='mx-auto w-20 h-20' />

                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">Create your new Quote</h5>

                </Link>
            </Card>
        </div>
    );
};

export default Quotes;