import React from 'react';
// import SharedBar from '../../../Components/SharedBar/SharedBar';

const Contact = () => {
  return (
    <div>

      <h2 className="my-4 text-5xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-gray-900 dark:text-gray-900 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>


      <p className='mb-8 lg:mb-16 font-light text-center text-gray-900 dark:text-gray-900 sm:text-xl"' >Contact Customer Service at <br /> <a className='text-blue-500' href="tel:+393801207403">(+39) 3801207403</a> or <a className='text-blue-500' href="mailto:info@qtoolsrl.it">info@qtoolsrl.it</a></p>
    </div>
  );
};

export default Contact;