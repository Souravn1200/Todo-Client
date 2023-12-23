import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ContentDetails = () => {

    const {title, descriptions, deadline, status, email} =  useLoaderData();

    return (
        <div className="bg-white shadow-md rounded-lg p-6 md:p-8 max-w-lg mx-auto mb-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <p className="text-gray-600 mb-2 text-sm">Description:</p>
          <p>{descriptions}</p>
        </div>
        <div>
          <p className="text-gray-600 mb-2 text-sm">Deadline:</p>
          <p>{deadline}</p>
        </div>
      </div>
      <div className="flex items-center mt-4">
        <span className={`px-3 py-1 rounded-md text-white text-sm ${status === 'pending' ? 'bg-yellow-500' : 'bg-green-500'}`}>
          {status}
        </span>
      </div>
      <div className="mt-4">
        <p className="text-gray-600 mb-2 text-sm">Email:</p>
        <p>{email}</p>
      </div>
    </div>
    );
};

export default ContentDetails;