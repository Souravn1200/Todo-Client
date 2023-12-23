import React from 'react';
import Draggable, {DraggableCore} from 'react-draggable';
import { Link } from 'react-router-dom';

const TodoContents = ({todos}) => {

    console.log(todos);
    return (
        <div>
           
            <div className='my-2'>
                {
                    todos?.map(todo => <div key={todo._id}>

                    <Link to={`/todo-details/${todo._id}`}> 
                        <div className='bg-yellow-100 mx-6 rounded-sm '> 
                            <p className='px-3 my-6 py-4 border hover:border-green-900 cursor-pointer'> {todo.title}</p>

                        </div>
                        </Link>
                    </div>)
                }

            </div>
           
        </div>
    );
};

export default TodoContents;