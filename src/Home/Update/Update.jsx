import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


const Update = () => {
    const { _id, title, descriptions, deadline, status, priority, email } = useLoaderData();
    
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();

      const onSubmit = data => {

        console.log(data);
    //   const createTodo = {

    //         title : data.Title,
    //         descriptions: data.Descriptions,
    //         deadline : data.Deadline,
    //         status: 'completed',

        
    //     }

    //     axios.post('http://localhost:5000/createtodo', createTodo)
    //     .then(res => {
    //       console.log(res.data);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   })


    axios.patch(`http://localhost:5000/content-update/${_id}`, data)
    .then(res => {
        console.log(res.data);
        if(res.data.acknowledged === true) {
            navigate('/dashboard')
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Content Updated",
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
        <div className="max-w-md mx-auto ">

        <form
          className="bg-[#31304D] shadow-md rounded px-8 pt-6 pb-8 mb-4 sm:max-w-lg sm:mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-[#F0ECE5] text-sm  mb-2"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Title Here"
              defaultValue={title}
              {...register('Title', { required: true })}
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
              {errors.Title && <p className='text-red-700 text-center mt-2'>*Title required.</p>}

          </div>
      
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-[#F0ECE5] text-sm  mb-2"
            >
              Descriptions
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              defaultValue={descriptions}
              {...register('Descriptions', { required: true })}
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
            ></textarea>
              {errors.Descriptions &&<p className='text-red-700 text-center mt-2'>*Descriptions required.</p>}
          </div>

          <div className="mb-6">
            <label
              htmlFor="Dedline"
              className="block text-[#F0ECE5] text-sm  mb-2"
            >
              Deadline
            </label>
            <input
              type="date"
              id="email"
              name="email"
              placeholder="Enter your email"
              defaultValue={deadline}
              {...register('Deadline', { required: true })}
              
             
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
              {errors.Deadline && <p className='text-red-700 text-center mt-2'>*Deadline required.</p>}
          </div>

          <div className="mb-4">
          <label
            htmlFor="priority"
            className="block text-[#F0ECE5] text-sm  mb-2"
          >
            Priority
          </label>
          <select
            id="priority"
            name="Priority"
            {...register('Priority')}
            defaultValue={priority}
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option className='bg-info' value="Low">Low</option>
            <option className='bg-warning' value="Moderate">Moderate</option>
            <option className='bg-error' value="High">High</option>
          </select>
        </div>

          <div className="flex items-center justify-center sm:justify-end">
            <button
              type="submit"
              className="bg-[#B6BBC4] hover:bg-[#F0ECE5] text-black  py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
};

export default Update;