import React from 'react';

const Blogs = () => {
    return (
        <div className=" py-10 px-5">
            <div className="max-w-2xl mx-auto ">
                <h1 className="text-3xl font-bold mb-4 text-[#f0f0f0]">Our Latest Blogs</h1>
                <div className="mb-6">
                    <div className="bg-white shadow-md rounded-md p-4 mb-4">
                        <h2 className="text-xl font-semibold mb-2">The Art of Web Development</h2>
                        <p className="text-gray-700 mb-2">
                            Web development is an ever-evolving field. In this blog post, we delve into the artistic
                            side of web development...
                        </p>
                        <a href="#" className="text-blue-500 hover:underline">
                            Read more
                        </a>
                    </div>
                    <div className="bg-white shadow-md rounded-md p-4">
                        <h2 className="text-xl font-semibold mb-2">Exploring AI in Everyday Life</h2>
                        <p className="text-gray-700 mb-2">
                            Artificial Intelligence has become an integral part of our lives. Let's explore its
                            implications...
                        </p>
                        <a href="#" className="text-blue-500 hover:underline">
                            Read more
                        </a>
                    </div>
                </div>
                <p className="text-lg text-[#f0f0f0]">
                    Explore our blog to discover more insightful articles covering various topics. Stay tuned for
                    updates!
                </p>
            </div>
        </div>
    );
};

export default Blogs;
