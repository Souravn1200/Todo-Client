import axios from 'axios';
import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const ContentDetails = () => {
  const { _id, title, descriptions, deadline, status, priority, email } = useLoaderData();
  const navigate = useNavigate();



 const makeContentOnging = _id => {
    axios.patch(`http://localhost:5000/make-content-onging/${_id}`, {status: 'ongoing'})
    .then(res => {
        console.log(res.data);
        if(res.data.acknowledged === true) {
            navigate('/')
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Updated To Onging Content",
              showConfirmButton: false,
              timer: 1500
            });
          }
      })

      .then(err=> {
        console.log(err);
      })
    
 }


 const makeContentCompleted = _id => {
    axios.patch(`http://localhost:5000/make-content-completed/${_id}`, {status: 'completed'})
    .then(res => {
        console.log(res.data);
        if(res.data.acknowledged === true) {
            navigate('/')
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Updated To Completed!!",
              showConfirmButton: false,
              timer: 1500
            });
          }
      })

      .then(err=> {
        console.log(err);
      })

 }

  const delelteContent = _id => {
    axios.delete(`http://localhost:5000/delete-content/${_id}`)
    .then(res => {
        console.log(res.data);
        if(res.data.acknowledged === true) {
            navigate('/dashboard')
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Content Deleted",
              showConfirmButton: false,
              timer: 1500
            });
          }
      })
      .then(err=> {
        console.log(err);
      })
  }


  return (

    
    <div className=" shadow-md rounded-lg p-6 md:p-8 lg:p-10 xl:p-12 max-w-lg mx-auto mb-6">

{
    status === 'todo' ? 
     
    <> 
    <div className='flex items-center justify-end gap-5'>
    <button className='bg-blue-400 hover:bg-blue-500 px-5 py-2 rounded-md text-black ' onClick={() =>makeContentOnging(_id)}> Make Onging </button>
<button className='bg-green-400 hover:bg-green-500 px-5 py-2 rounded-md text-black' onClick={() =>makeContentCompleted(_id)}> Make Complete </button>
    </div>

    
    </> 
    
    :

    status === 'ongoing' ? 
    
    <>
<button className='bg-slate-500 px-5 py-2 rounded-md text-black' onClick={() =>makeContentCompleted(_id)}> Make Complete </button>
    
    </> 
    
    :

    <></>

}




      <h2 className="text-2xl font-semibold mb-4 text-[#f2f2f2] mt-10">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <p className="text-[#f4f4f4] mb-2 text-sm">Description: {descriptions}</p>
          
        </div>
        <div>
          <p className="text-[#f4f4f4] mb-2 text-sm">Deadline:  {deadline}</p>
        </div>
      </div>
      <div className="flex items-center justify-between mt-20">

        
        <span
          className={`px-3 py-1 rounded-md text-white text-sm uppercase ${status === 'todo' ? 'bg-gray-600' : 'bg-green-500'}`}
        >
          {status}
        </span>

<div className='flex items-start justify-between'>

<Link to={`/update-content/${_id}`}> 
        <button className='bg-blue-400 hover:bg-blue-500 px-5 py-2 rounded-md text-black  mr-4'> Update</button>
        </Link>    

         
        <button className='bg-red-400 px-5 py-2 rounded-md text-black ' onClick={() =>delelteContent(_id)}> Delete</button>
           
</div>
        

      </div>
      
    </div>
  );
};

export default ContentDetails;
