import React from 'react';
import { Link } from 'react-router-dom';

const CompletedContents = ({ completed }) => {
    return (
        <div>
            <div>
                <div className='my-2'>
                    {
                        completed?.map(complete => <div key={complete._id}>
                            <Link to={`/todo-details/${complete._id}`}>
                                <div className='bg-yellow-100 mx-6 rounded-sm '>
                                    <p className='px-3 my-6 py-4 border hover:border-green-900 cursor-pointer'> {complete.title}</p>

                                </div>
                            </Link>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default CompletedContents;