import React from 'react';

const LandingPage = () => {
    return (
        <div className="bg-[#31304D]">
           
            <section className="py-16 px-4 text-center">
                <h1 className="text-4xl font-bold mb-4 text-[#f2f2f2]">Welcome to MyTodo App</h1>
                <p className="text-lg mb-8 text-[#f4f4f4]">
                    Organize your tasks efficiently and boost your productivity with our simple and intuitive todo app.
                </p>
                <a
                    href="/login"
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full text-lg transition duration-300"
                >
                    Get Started
                </a>
            </section>

          
            <section  className="py-16  px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6 text-[#f2f2f2]">Targeted Audience</h2>
                    <p className="text-lg mb-8 text-[#f4f4f4]">
                        MyTodo App is designed for individuals and teams looking for a simple yet powerful task
                        management tool. It caters to:
                    </p>
                    <div className="flex justify-center items-start flex-wrap">
                        <div className="bg-white shadow-md rounded-md p-4 m-4 max-w-xs">
                            <h3 className="text-xl font-semibold mb-2">Students</h3>
                            <p className="text-gray-700 mb-2">
                                Stay organized with assignments, projects, and personal tasks.
                            </p>
                        </div>
                        <div className="bg-white shadow-md rounded-md p-4 m-4 max-w-xs">
                            <h3 className="text-xl font-semibold mb-2">Professionals</h3>
                            <p className="text-gray-700 mb-2">
                                Manage work tasks, deadlines, meetings, and collaborate with teams effortlessly.
                            </p>
                        </div>
                        <div className="bg-white shadow-md rounded-md p-4 m-4 max-w-xs">
                            <h3 className="text-xl font-semibold mb-2">Families</h3>
                            <p className="text-gray-700 mb-2">
                                Keep track of household chores, shopping lists, and important family events.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
