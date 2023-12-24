import React from 'react';

const ContactUs = () => {
    return (
        <div className=" py-10 px-5 h-screen">
            <div className="max-w-2xl mx-auto mt-16 text-[#f2f2f2]">
                <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
                <p className="text-lg mb-4">
                    Have a question or want to get in touch? Feel free to reach out to us using the information below:
                </p>
                <div className="flex items-center mb-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 2a8 8 0 018 8c0 2.413-.94 4.738-2.686 6.464l-.083.08a31.92 31.92 0 01-4.157 3.32 1 1 0 01-1.148 0 31.92 31.92 0 01-4.157-3.32l-.083-.08C2.939 14.738 2 12.413 2 10a8 8 0 018-8zM9 12a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1zm2-7a1 1 0 100 2 1 1 0 000-2z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <span className="text-lg">Email: <a href="">mytodo@gmail.com</a> </span>
                </div>
                <div className="flex items-center mb-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M3 4a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1h-3.586a1 1 0 00-.707.293l-2.414 2.414A1 1 0 017.414 18H4a1 1 0 01-1-1V4zm2 2v10h10V6H5z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <span className="text-lg">Phone: +88 01456 1590</span>
                </div>
                <p className="text-lg">
                    We'd love to hear from you! Whether it's feedback, inquiries, or anything else, don't hesitate to
                    reach out.
                </p>
            </div>
        </div>
    );
};

export default ContactUs;
