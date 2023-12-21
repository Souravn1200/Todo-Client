import { NavLink } from "react-router-dom";

const Navbar = () => {

  
  
    return (
  //       <div>
        
  //       {/* Navbar starts */}
  
  // <nav className="bg-[#0b719c] p-4">
  //       <div className="flex items-center justify-between">
  //         <div className="flex items-center flex-shrink-0 text-[#fffefe] mr-6">
  
  
  //         <div className="flex items-center">
  //   <div className="avatar">
  //   <div className="w-14 rounded">
  //     <img className='' src="https://i.ibb.co/2vKwp5t/356209715-117516454709683-8495291898662524202-n-removebg-preview.png" />
  //   </div>
    
  // </div>
  //     <div className='ml-4 text-lg '>
  //     <h2>SOURAV DUTTA</h2>
      
  //   </div>
  
  //   </div>
  
          
          
  //         </div>
  //         <div className="block lg:hidden">
  //           <button
  //             onClick={toggleNavbar}
  //             className="flex items-center px-3 py-2 border rounded text-[#e4dcdc] border-gray-400 hover:text-white hover:border-white"
  //           >
  //             <svg
  //               className="h-3 w-3 fill-current"
  //               viewBox="0 0 20 20"
  //               xmlns="http://www.w3.org/2000/svg"
  //             >
  //               <title>Menu</title>
  //               {isOpen ? (
  //                 <path
  //                   fillRule="evenodd"
  //                   clipRule="evenodd"
  //                   d="M4 5h12a1 1 0 110 2H4a1 1 0 110-2zm0 5h12a1 1 0 110 2H4a1 1 0 110-2zm0 5h12a1 1 0 110 2H4a1 1 0 110-2z"
  //                 />
  //               ) : (
  //                 <path
  //                   fillRule="evenodd"
  //                   clipRule="evenodd"
  //                   d="M0 3a1 1 0 011-1h18a1 1 0 110 2H1a1 1 0 01-1-1zm0 8a1 1 0 011-1h18a1 1 0 110 2H1a1 1 0 01-1-1zm0 8a1 1 0 011-1h18a1 1 0 110 2H1a1 1 0 01-1-1z"
  //                 />
  //               )}
  //             </svg>
  //           </button>
  //         </div>
  //         <div
  //           className={`${
  //             isOpen ? 'block' : 'hidden'
  //           } lg:flex lg:items-center lg:w-auto`}
  //         >
  //           <div className=" text-lglg:flex-grow">
  //             <a
  //               href="#home"
  //               className="block mt-4 lg:inline-block lg:mt-0 text-[#d0d0d0] hover:text-white mr-4"
  //             >
  //               Home
  //             </a>
  //             <a
  //               href="#about"
  //               className="block mt-4 lg:inline-block lg:mt-0 text-[#d0d0d0] hover:text-white mr-4"
  //             >
  //               About
  //             </a>
  //             <a
  //               href="#services"
  //               className="block mt-4 lg:inline-block lg:mt-0 text-[#d0d0d0] hover:text-white mr-4"
  //             >
  //               Services
  //             </a>
  //             <a
  //               href="#contact"
  //               className="block mt-4 lg:inline-block lg:mt-0 text-[#d0d0d0] hover:text-white"
  //             >
  //               Contact
  //             </a>
  //           </div>
  //         </div>
  //       </div>
  //     </nav>
  
  //  {/* Navbar ends */}
  
  //         </div>

  <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

      <li><a> Create Todo </a></li>
       <li><a>Item 1</a></li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <div className='flex items-center'>
    <img className='h-8 w-10' src="https://www.svgrepo.com/show/503110/todo.svg" alt="" />
      <NavLink to='/'><p className='uppercase'>My TODO</p></NavLink>
    </div>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a> <NavLink to="/create">Create Todo</NavLink> </a></li>
      <li><a>Item 1</a></li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
  
</div>
    );
};

export default Navbar;