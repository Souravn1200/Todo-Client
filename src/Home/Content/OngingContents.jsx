import React from 'react';
import { Link } from 'react-router-dom';

const OngingContents = ({ongings}) => {
    return (
        <div>
            <div>
            <div className='my-2'>
                {
                    ongings?.map(onging => <div key={onging._id}>


                        <Link to={`/todo-details/${onging._id}`}> 
                        <div className='bg-yellow-100 mx-6 rounded-sm '> 
                            <p className='px-3 my-6 py-4 border hover:border-green-900 cursor-pointer'> {onging.title}</p>

                        </div>
                        </Link>
                    </div>)
                }

            </div>
        </div>
        </div>
    );
};

export default OngingContents;