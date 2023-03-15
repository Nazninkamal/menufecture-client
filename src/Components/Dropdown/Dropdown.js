
import { BsThreeDotsVertical } from 'react-icons/bs';

import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'



export const Dropdown1 = ({ menus }) => {
    const [openDropdown, setOpenDropdown] = useState(false);
    return (
        <div className=' relative' onClick={() => setOpenDropdown(!openDropdown)}>

            <div className="absolute right-0 z-10">
                <button onClick={() => setOpenDropdown(!openDropdown)} className='right-0 absolute p-2'>
                    <BsThreeDotsVertical />
                </button>
                <div className={`${openDropdown ? 'block duration-500' : 'hidden duration-500'} mt-3 `}>

                    <div className="mt-2 py-2 w-24 bg-white rounded-lg shadow-xl">

                        {
                            menus?.map((menu, i) => (
                                <button key={i} onClick={menu?.action} className=" w-full px-4 py-2 text-sm text-gray-800 hover:bg-indigo-500 hover:text-white">{menu?.title}</button>
                            ))
                        }

                    </div>
                </div>
            </div>

        </div>
    );
};

