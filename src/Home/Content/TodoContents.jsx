import React from 'react';

const TodoContents = ({todos}) => {

    console.log(todos);
    return (
        <div>
            <div className='my-2'>
                {
                    todos?.map(todo => <div key={todo._id}>

                        <div className='bg-yellow-100 mx-6 rounded-sm '> 
                            <p className='px-3 my-6 py-4 border hover:border-green-900 cursor-pointer'> {todo.title}</p>

                        </div>

                    </div>)
                }

            </div>
        </div>
    );
};

export default TodoContents;