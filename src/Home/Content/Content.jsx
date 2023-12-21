import React from 'react';

const Content = () => {
    return (
        <div>
         <div className="flex bg-[#161A30]
 min-h-screen">
      {/* Sidebar */}
      <aside className="w-1/4  text-white py-8 px-4">
        {/* Sidebar Content */}
        <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
        {/* Add sidebar items or navigation links */}
        <ul className="space-y-2">
          <li>Dashboard Item 1</li>
          <li>Dashboard Item 2</li>
          <li>Dashboard Item 3</li>
        </ul>
      </aside>

      {/* Main Content - 3 Columns */}
      <main className="flex-1 flex flex-col">

        {/* Main Content - 3 Columns */}
        <div className="flex-1 flex justify-center items-start py-8 px-4 gap-4">
          {/* Todo List */}
          <div className="w-full lg:w-1/3 rounded-sm border">
            <h2 className="text-xl font-semibold text-center bg-[#B6BBC4]">Todo List</h2>
            {/* Add your todo list components here */}
          </div>

          {/* Ongoing List */}
          <div className="w-full lg:w-1/3 rounded-sm border">
            <h2 className="text-xl font-semibold text-center bg-[#B6BBC4] ">Ongoing List</h2>
            {/* Add your ongoing list components here */}
          </div>

          {/* Completed List */}
          <div className="w-full lg:w-1/3 rounded-sm border">
            <h2 className="text-xl font-semibold text-center bg-[#B6BBC4]">Completed List</h2>
            {/* Add your completed list components here */}
          </div>
        </div>
      </main>
    </div>
        </div>
    );
};

export default Content;