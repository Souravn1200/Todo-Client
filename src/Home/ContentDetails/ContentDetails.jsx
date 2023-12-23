import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ContentDetails = () => {
  const { _id, title, descriptions, deadline, status,priority, email } = useLoaderData();

  return (
    <div className="bg-yellow-50  mt-10 shadow-md rounded-lg p-6 md:p-8 lg:p-10 xl:p-12 max-w-lg mx-auto mb-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <p className="text-gray-600 mb-2 text-sm">Description: {descriptions}</p>
          
        </div>
        <div>
          <p className="text-gray-600 mb-2 text-sm">Deadline:  {deadline}</p>
        </div>
      </div>
      <div className="flex items-center mt-4">
        <span
          className={`px-3 py-1 rounded-md text-white text-sm uppercase ${status === 'pending' ? 'bg-yellow-500' : 'bg-green-500'}`}
        >
          {status}
        </span>

        <Link to={`/update-content/${_id}`}> 
        <button className='bg-blue-400 px-3 py-1 rounded-md text-black text-sm'> Update</button>
        </Link>        
      </div>
      
    </div>
  );
};

export default ContentDetails;
