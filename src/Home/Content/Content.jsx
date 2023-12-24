import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import axios from 'axios';
import TodoContents from './TodoContents';
import OngingContents from './OngingContents';
import CompletedContents from './CompletedContents';
import { NavLink } from 'react-router-dom';

const Content = () => {
  const { user } = useContext(AuthContext);
  const [allToDos, setAllTodos] = useState([]);
  let todos = [];
  let ongoings = [];
  let completed = [];

  useEffect(() => {
    axios.get(`http://localhost:5000/load-todo-content/${user?.email}`)
      .then(res => {
        setAllTodos(res.data || []);
      })
      .catch(error => {
        console.log(error);
      });
  }, [user?.email]);

  if (allToDos && Array.isArray(allToDos)) {
    todos = allToDos.filter(todo => todo?.status === 'todo');
    ongoings = allToDos.filter(ongoing => ongoing?.status === 'ongoing');
    completed = allToDos.filter(complete => complete?.status === 'completed');
  } else {
    console.log('no data to show');
  }

  return (
    <div className="container mx-auto px-4 py-8 h-screen">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <aside className="md:w-1/4 text-white py-8 px-4">
          <div className=''>
            <img className='h-20 rounded' src={user?.photoURL} alt="" />
            <div className='mt-5'>
              <span >Name: {user?.displayName}</span> <br />
              <span className='mt-5'>Email: {user?.email}</span>
            </div>
          </div>
        </aside>

        {/* Main Content - 3 Columns */}
        <main className="flex-1">

          <div className="mx-auto w-[18%]" >

          <NavLink to="/create">
            <button className="bg-[#161A30] text-[#F0ECE5] hover:bg-[#374499]  rounded px-4 py-2 mb-4">
              Create Todo
            </button>
          </NavLink>
          </div>
          

          {/* Todo Lists */}
          <div className="flex flex-col md:flex-row gap-4">

            {/* Todo List */}
            <div className="w-full md:w-1/3 rounded-sm border bg-[#161A30]">
              <h2 className="text-xl font-semibold text-center bg-[#B6BBC4] py-2">Todo List</h2>
              <TodoContents todos={todos} />
            </div>

            {/* Ongoing List */}
            <div className="w-full md:w-1/3 rounded-sm border bg-[#161A30]">
              <h2 className="text-xl font-semibold text-center bg-[#B6BBC4] py-2">Ongoing List</h2>
              <OngingContents ongings={ongoings} />
            </div>

            {/* Completed List */}
            <div className="w-full md:w-1/3 rounded-sm border bg-[#161A30]">
              <h2 className="text-xl font-semibold text-center bg-[#B6BBC4] py-2">Completed List</h2>
              <CompletedContents completed={completed} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Content;
